<template>
	<div>
		<div
			class="mx-auto p-6 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 shadow-lg rounded-lg"
		>
			<h2 class="text-2xl font-light text-white mb-6">Asteroid Search</h2>
			<form
				@submit.prevent="fetchFromNASA"
				class="grid grid-cols-1 md:grid-cols-3 gap-4 bg-white p-6 rounded-lg shadow-md"
			>
				<!-- Start Date -->
				<DateInput
					id="start_date"
					label="Start Date"
					v-model="startDate"
					required
				/>

				<!-- End Date -->
				<DateInput id="end_date" label="End Date" v-model="endDate" />

				<!-- Submit Button -->
				<div class="flex items-end">
					<button
						type="submit"
						class="w-full bg-gradient-to-r from-purple-500 via-indigo-500 to-pink-500 text-white font-semibold py-2 px-4 rounded-md shadow-md hover:opacity-90 focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition"
					>
						Search
					</button>
				</div>
			</form>
		</div>

		<div
			class="grid gap-4 mx-auto justify-items-center py-4 auto-cols-fr grid-cols-[repeat(auto-fit,minmax(350px,1fr))]"
		>
			<AsteroidStats
				statTitle="Fastest Asteroid"
				:astName="fastestAsteroid.name"
				:statValue="fastestAsteroid.speed"
				unit="km/h"
			/>
			<AsteroidStats
				statTitle="Closest Asteroid"
				:astName="closestAsteroid.name"
				:statValue="closestAsteroid.distance"
				unit="km"
			/>
			<AsteroidStats
				statTitle="Average Asteroid Size"
				:statValue="averageSize"
				unit="km"
			/>
		</div>

		<ClientOnly>
			<GraphChart
				v-if="!loading"
				:labels="chartLabels"
				:dataPoints="chartDataPoints"
				chartType="line"
				:gradientColors="gradientColors"
				class="self-center"
			/>
		</ClientOnly>
	</div>
</template>
<script setup>
import { Chart } from "chart.js/auto";
import longData from "./data.js";
const loading = ref(false);
const config = useRuntimeConfig();
const startDate = ref("");
const endDate = ref("");

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

	// Check if 30 seconds have passed since the last request
	if (isFetching || now - lastFetchTime < 30000) {
		alert("Please wait 30 seconds before making another request.");
		return;
	}

	isFetching = true;

	try {
		// Validate startDate
		if (!startDate.value) {
			throw new Error(
				"Start date is required. Please provide a valid start date."
			);
		}
		loading.value = true;
		// Construct the URL dynamically
		let url = `${config.public.nasaBaseURL}/feed?start_date=${startDate.value}`;
		if (endDate.value) {
			url += `&end_date=${endDate.value}`;
		}
		url += `&api_key=${config.public.nasaApiKey}`;

		// Fetch data from NASA API
		const response = await fetch(url);

		if (response.status === 400) {
			throw new Error(
				"Date Format Exception - Expected format (yyyy-mm-dd). The Feed date limit is only 7 Days."
			);
		} else if (response.status === 403) {
			throw new Error(
				"Access forbidden: Your API key might be invalid or you have exceeded the usage limit."
			);
		} else if (!response.ok) {
			throw new Error(
				`Unexpected error occurred: ${response.status} - ${response.statusText}`
			);
		}

		if (!response.ok) {
			throw new Error(
				`HTTP Error: ${response.status} - ${response.statusText}`
			);
		}

		responseData.value = await response.json();
		lastFetchTime = now; // Update the last fetch time
	} catch (error) {
		console.error("Error fetching data from NASA API:", error.message);
		alert(`Error: ${error.message}`);
		throw error;
	} finally {
		// Reset the flag after 30 seconds
		setTimeout(() => {
			isFetching = false;
		}, 30000);
		loading.value = false;
	}
}
</script>
<style scoped></style>
