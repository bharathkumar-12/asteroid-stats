<template>
	<div class="space-y-12">
		<!-- Hero Section -->
		<section class="relative py-20 overflow-hidden">
			<div class="absolute inset-0 bg-gradient-to-b from-blue-900/20 to-black/40 z-0"></div>
			<div class="relative z-10 max-w-4xl mx-auto text-center">
				<h1 class="text-5xl md:text-6xl font-light mb-6 tracking-tight">
					Explore Near-Earth Asteroids
				</h1>
				<p class="text-xl text-gray-300 mb-8">
					Track and analyze asteroid data from NASA's NEO database
				</p>
			</div>
		</section>

		<!-- Search Section -->
		<section class="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
			<h2 class="text-2xl font-light mb-6 text-blue-400">Asteroid Search</h2>
			<form
				@submit.prevent="fetchFromNASA"
				class="grid grid-cols-1 md:grid-cols-3 gap-6"
			>
				<!-- Start Date -->
				<DateInput
					id="start_date"
					label="Start Date"
					v-model="startDate"
					@update:modelValue="setDateRange"
					required
					class="bg-white/5 border-white/10 text-white"
				/>

				<!-- End Date -->
				<DateInput 
					id="end_date" 
					label="End Date" 
					v-model="endDate"
					:allowedRange="dateRange"
					class="bg-white/5 border-white/10 text-white"
				/>

				<!-- Submit Button -->
				<div class="flex items-end">
					<button
						type="submit"
						class="w-full bg-blue-500 hover:bg-blue-600 text-white font-light py-3 px-6 rounded-lg transition-all duration-300 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-black"
					>
						Search Asteroids
					</button>
				</div>
			</form>
		</section>

		<!-- Stats Grid -->
		<section class="grid gap-6 grid-cols-1 md:grid-cols-3">
			<AsteroidStats
				statTitle="Fastest Asteroid"
				:astName="fastestAsteroid.name"
				:statValue="fastestAsteroid.speed"
				unit="km/h"
				class="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6"
			/>
			<AsteroidStats
				statTitle="Closest Asteroid"
				:astName="closestAsteroid.name"
				:statValue="closestAsteroid.distance"
				unit="km"
				class="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6"
			/>
			<AsteroidStats
				statTitle="Average Asteroid Size"
				:statValue="averageSize"
				unit="km"
				class="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6"
			/>
		</section>

		<!-- Chart Section -->
		<section class="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
			<h2 class="text-2xl font-light mb-6 text-blue-400">Asteroid Activity</h2>
			<ClientOnly>
				<GraphChart
					v-if="!loading"
					:labels="chartLabels"
					:dataPoints="chartDataPoints"
					chartType="line"
					:gradientColors="gradientColors"
					class="w-full h-[400px]"
				/>
			</ClientOnly>
		</section>

		<!-- Facts Section -->
		<section class="grid gap-8 md:grid-cols-2">
			<!-- Asteroid Facts -->
			<div class="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
				<h2 class="text-2xl font-light mb-6 text-blue-400">Asteroid Facts</h2>
				<div class="space-y-6">
					<div class="flex items-start space-x-4">
						<div class="flex-shrink-0 w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center">
							<svg class="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
							</svg>
						</div>
						<div>
							<h3 class="text-lg font-light text-white mb-2">Fastest Known Asteroid</h3>
							<p class="text-gray-300">The fastest asteroid ever recorded was traveling at approximately 70,000 km/h (43,500 mph) relative to Earth.</p>
						</div>
					</div>
					<div class="flex items-start space-x-4">
						<div class="flex-shrink-0 w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center">
							<svg class="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
							</svg>
						</div>
						<div>
							<h3 class="text-lg font-light text-white mb-2">Closest Approach</h3>
							<p class="text-gray-300">The closest asteroid approach in recent history was just 2,950 km (1,830 miles) from Earth's surface.</p>
						</div>
					</div>
					<div class="flex items-start space-x-4">
						<div class="flex-shrink-0 w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center">
							<svg class="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
							</svg>
						</div>
						<div>
							<h3 class="text-lg font-light text-white mb-2">Size Distribution</h3>
							<p class="text-gray-300">Most near-Earth asteroids are between 100 meters and 1 kilometer in diameter, with some as large as 5 kilometers.</p>
						</div>
					</div>
				</div>
			</div>

			<!-- NASA Missions -->
			<div class="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
				<h2 class="text-2xl font-light mb-6 text-blue-400">NASA Missions</h2>
				<div class="space-y-8">
					<div class="flex items-start space-x-6">
						<div class="flex-shrink-0 w-16 h-16 rounded-full bg-blue-500/10 flex items-center justify-center">
							<svg class="w-10 h-10 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
							</svg>
						</div>
						<div>
							<h3 class="text-xl font-light text-white mb-2">OSIRIS-REx</h3>
							<p class="text-gray-300">First U.S. mission to return asteroid samples to Earth. Successfully collected material from asteroid Bennu in 2020.</p>
							<div class="mt-4 flex space-x-4">
								<span class="text-sm text-blue-400">Launch: 2016</span>
								<span class="text-sm text-blue-400">Return: 2023</span>
							</div>
						</div>
					</div>
					<div class="flex items-start space-x-6">
						<div class="flex-shrink-0 w-16 h-16 rounded-full bg-blue-500/10 flex items-center justify-center">
							<svg class="w-10 h-10 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13 10V3L4 14h7v7l9-11h-7z" />
							</svg>
						</div>
						<div>
							<h3 class="text-xl font-light text-white mb-2">DART Mission</h3>
							<p class="text-gray-300">First planetary defense test against asteroid impact. Successfully altered asteroid Dimorphos's orbit in 2022.</p>
							<div class="mt-4 flex space-x-4">
								<span class="text-sm text-blue-400">Launch: 2021</span>
								<span class="text-sm text-blue-400">Impact: 2022</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>

		<!-- Asteroid Simulation -->
		<section class="relative h-[400px] bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 overflow-hidden">
			<h2 class="text-2xl font-light mb-6 text-blue-400">Asteroid Approach Simulation</h2>
			<div class="relative h-full">
				<!-- Earth -->
				<div class="absolute bottom-0 left-1/2 -translate-x-1/2 w-32 h-32 rounded-full bg-blue-500/20 border border-blue-400/30 flex items-center justify-center">
					<div class="w-24 h-24 rounded-full bg-blue-500/30 border border-blue-400/40"></div>
					<!-- Atmosphere Glow -->
					<div class="absolute inset-0 rounded-full bg-blue-400/10 animate-pulse"></div>
				</div>
				
				<!-- Orbit Path -->
				<div class="absolute inset-0 border border-blue-400/10 rounded-full"></div>
				<div class="absolute inset-4 border border-blue-400/5 rounded-full"></div>
				<div class="absolute inset-8 border border-blue-400/5 rounded-full"></div>
				
				<!-- Asteroids -->
				<template v-if="asteroids.length > 0">
					<div 
						v-for="asteroid in asteroids.slice(0, 5)" 
						:key="asteroid.id"
						class="absolute animate-asteroid"
						:style="{
							width: `${Math.min(asteroid.estimated_diameter.kilometers.estimated_diameter_max * 40, 48)}px`,
							height: `${Math.min(asteroid.estimated_diameter.kilometers.estimated_diameter_max * 40, 48)}px`,
							animationDelay: `${Math.random() * 5}s`,
							animationDuration: `${Math.max(5, Math.min(15, asteroid.close_approach_data[0]?.relative_velocity.kilometers_per_hour / 10000))}s`,
							left: `${Math.random() * 100}%`,
							top: `${Math.random() * 100}%`
						}"
					>
						<div class="relative">
							<!-- Blinking Circle -->
							<div class="absolute inset-0 rounded-full bg-yellow-400/20 animate-pulse"></div>
							<div class="absolute inset-2 rounded-full bg-yellow-400/10 animate-pulse" style="animation-delay: 0.5s"></div>
							<div class="absolute inset-4 rounded-full bg-yellow-400/5 animate-pulse" style="animation-delay: 1s"></div>
							
							<!-- Asteroid Icon -->
							<div class="relative w-full h-full rounded-full bg-white/90 flex items-center justify-center border-2 border-yellow-400/50 shadow-lg">
								<!-- Crater Effect -->
								<div class="absolute w-1/2 h-1/2 rounded-full bg-gray-200/50 top-1/4 left-1/4"></div>
								<div class="absolute w-1/3 h-1/3 rounded-full bg-gray-300/50 top-1/3 right-1/4"></div>
								<!-- Glow Effect -->
								<div class="absolute inset-0 rounded-full bg-white/20 animate-pulse"></div>
							</div>
							
							<!-- Fixed Name Tag -->
							<div class="absolute -top-8 left-1/2 transform -translate-x-1/2">
								<div class="bg-black/60 backdrop-blur-sm border border-yellow-400/30 rounded-lg px-2 py-1 text-xs text-white whitespace-nowrap animate-float">
									{{ asteroid.name }}
								</div>
								<!-- Tag Connector Line -->
								<div class="absolute left-1/2 -translate-x-1/2 w-px h-2 bg-yellow-400/20"></div>
							</div>
						</div>
					</div>
				</template>
				<template v-else>
					<div class="absolute inset-0 flex items-center justify-center">
						<p class="text-gray-400">Select a date range to see asteroid simulations</p>
					</div>
				</template>

				<!-- Info Panel -->
				<div class="absolute top-4 right-4 bg-black/40 backdrop-blur-sm border border-white/10 rounded-lg p-4 max-w-xs">
					<h3 class="text-sm font-light text-blue-400 mb-2">Simulation Details</h3>
					<div class="space-y-2 text-sm text-gray-300">
						<p>Showing {{ Math.min(asteroids.length, 5) }} asteroids</p>
						<p>Size scale: 1km = 20px</p>
						<p>Speed: Relative to orbital velocity</p>
						<p class="text-xs text-blue-400">Hover over asteroids to see names</p>
					</div>
				</div>
			</div>
		</section>

		<!-- Impact Statistics -->
		<section class="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
			<h2 class="text-2xl font-light mb-6 text-blue-400">Impact Statistics</h2>
			<div class="grid gap-6 md:grid-cols-3">
				<div class="text-center">
					<div class="text-4xl font-light text-blue-400 mb-2">~1,000</div>
					<div class="text-gray-300">Near-Earth asteroids larger than 1km</div>
				</div>
				<div class="text-center">
					<div class="text-4xl font-light text-blue-400 mb-2">~15,000</div>
					<div class="text-gray-300">Near-Earth asteroids larger than 140m</div>
				</div>
				<div class="text-center">
					<div class="text-4xl font-light text-blue-400 mb-2">~100</div>
					<div class="text-gray-300">New asteroids discovered monthly</div>
				</div>
			</div>
		</section>

		<!-- Call to Action -->
		<section class="text-center py-12">
			<h2 class="text-3xl font-light text-white mb-4">Want to Learn More?</h2>
			<p class="text-gray-300 mb-8 max-w-2xl mx-auto">
				NASA's Near-Earth Object Program provides detailed information about asteroids and comets that orbit near Earth.
			</p>
			<a 
				href="https://cneos.jpl.nasa.gov/" 
				target="_blank" 
				rel="noopener noreferrer"
				class="inline-flex items-center px-6 py-3 rounded-lg bg-blue-500 hover:bg-blue-600 text-white font-light transition-all duration-300"
			>
				Visit NASA NEO Program
				<svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
				</svg>
			</a>
		</section>
	</div>
</template>
<script setup>
import { Chart } from "chart.js/auto"
import longData from "./data.js"
const loading = ref(false)
const config = useRuntimeConfig()
const startDate = ref("")
const endDate = ref("")
const dateRange = ref({})

const responseData = ref(longData);

const asteroids = computed(() => {
	const objects = responseData.value.near_earth_objects;
	return Object.values(objects).flat();
});

const fastestAsteroid = computed(() => {
	return asteroids.value.reduce((fastest, asteroid) => {
		const speed = parseFloat(
			asteroid.close_approach_data[0]?.relative_velocity.kilometers_per_hour
		);
		return speed > (fastest?.speed || 0)
			? { name: asteroid.name, speed }
			: fastest;
	}, null);
});

const closestAsteroid = computed(() => {
	return asteroids.value.reduce((closest, asteroid) => {
		const distance = parseFloat(
			asteroid.close_approach_data[0]?.miss_distance.kilometers
		);
		return distance < (closest?.distance || Infinity)
			? { name: asteroid.name, distance }
			: closest;
	}, null);
});

const averageSize = computed(() => {
	const totalSize = asteroids.value.reduce((sum, asteroid) => {
		const diameterMin =
			asteroid.estimated_diameter.kilometers.estimated_diameter_min;
		const diameterMax =
			asteroid.estimated_diameter.kilometers.estimated_diameter_max;
		const averageDiameter = (diameterMin + diameterMax) / 2;
		return sum + averageDiameter;
	}, 0);

	return (totalSize / asteroids.value.length).toFixed(2);
});

const chartLabels = computed(() =>
	Object.keys(responseData.value.near_earth_objects)
);

const chartDataPoints = computed(() =>
	chartLabels.value.map(
		(date) => responseData.value.near_earth_objects[date]?.length || 0
	)
);

const gradientColors = computed(() => [
	{ offset: 0, color: "rgba(255, 99, 132, 0.5)" },
	{ offset: 0.5, color: "rgba(54, 162, 235, 0.5)" },
	{ offset: 1, color: "rgba(75, 192, 192, 0.5)" },
]);

let isFetching = false; // Flag to prevent multiple requests
let lastFetchTime = 0; // Store the last fetch time

async function fetchFromNASA() {
	const now = Date.now();

	// Throttle requests to every 30 seconds
	if (isFetching || now - lastFetchTime < 30000) {
		alert("Please wait 30 seconds before making another request.");
		return;
	}

	// Validate startDate
	if (!startDate.value) {
		alert("Start date is required. Please provide a valid start date.");
		return;
	}

	isFetching = true;
	loading.value = true;

	try {
		// Build the request URL
		const url = new URL(`${config.public.nasaBaseURL}/feed`);
		url.searchParams.append("start_date", startDate.value);

		if (endDate.value) {
			url.searchParams.append("end_date", endDate.value);
		}

		url.searchParams.append("api_key", config.public.nasaApiKey);
		const response = await fetch(url.toString());

		// Handle response status codes
		if (!response.ok) {
			handleError(response.status);
			return;
		}

		// Parse and store response data
		responseData.value = await response.json();
		lastFetchTime = now; // Update the last fetch time
	} catch (error) {
		console.error("Error fetching data from NASA API:", error.message);
		alert(`Error: ${error.message}`);
	} finally {
		// Reset the fetching flag and loading state
		isFetching = false;
		loading.value = false;
	}
}

// Handle response errors based on status codes
function handleError(status) {
	const errorMessages = {
		400: "Date Format Exception - Expected format (yyyy-mm-dd). The Feed date limit is only 7 Days.",
		403: "Access forbidden: Your API key might be invalid or you have exceeded the usage limit.",
		default: "An unexpected error occurred. Please try again later.",
	};

	const message = errorMessages[status] || `HTTP Error: ${status}`;
	console.error("API Error:", message);
	alert(message);
}


const setDateRange = () => {
	endDate.value = ""
	// Calculate the end date as 7 days after the start date
	const start = new Date(startDate.value)
	const calculatedEndDate = new Date(start)
	calculatedEndDate.setDate(start.getDate() + 7)

	// Set the allowed range dynamically
	dateRange.value = {
		start: startDate.value,
		end: calculatedEndDate.toISOString().split("T")[0],
	}
}

watch(startDate, () => {
	if (startDate.value) {
		setDateRange();
	}
});
</script>

