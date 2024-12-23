<template>
	<div
		class="relative w-full h-96 p-2 rounded-lg bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
	>
		<div
			class="w-full h-full bg-white rounded-lg p-4 grid justify-items-center"
		>
			<canvas ref="chartCanvas"></canvas>
		</div>
	</div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, watch } from "vue";
import Chart from "chart.js/auto";

// Props
const props = defineProps({
	labels: {
		type: Array,
		required: true,
	},
	dataPoints: {
		type: Array,
		required: true,
	},
	chartType: {
		type: String,
		default: "line",
	},
});

const chartCanvas = ref(null); // Reference to the canvas element
let chartInstance = null; // Chart.js instance

// Function to render the chart
const renderChart = () => {
	const canvasElement = chartCanvas.value; // Access the canvas element via ref
	if (!canvasElement) {
		console.error("Canvas element not found!");
		return;
	}

	const ctx = canvasElement.getContext("2d");

	// Destroy existing chart instance if it exists
	if (chartInstance) {
		chartInstance.destroy();
	}

	// Create a new chart
	chartInstance = new Chart(ctx, {
		type: props.chartType,
		data: {
			labels: props.labels,
			datasets: [
				{
					label: "Number of Asteroids",
					data: props.dataPoints,
					borderColor: "rgba(75, 192, 192, 1)", // Line color
					backgroundColor: "rgba(75, 192, 192, 0.2)", // Fill color
					borderWidth: 2,
					tension: 0.4, // Smooth curve
					fill: true, // Fill area under the line
				},
			],
		},
		options: {
			responsive: true,
			scales: {
				x: {
					title: {
						display: true,
						text: "Dates",
					},
				},
				y: {
					title: {
						display: true,
						text: "Asteroids",
					},
					beginAtZero: true,
				},
			},
		},
	});
};

// Watch props and update chart on changes
watch(() => [props.labels, props.dataPoints, props.chartType], renderChart, {
	immediate: true,
});

// Initialize chart on mount
onMounted(renderChart);

// Cleanup chart on unmount
onUnmounted(() => {
	if (chartInstance) {
		chartInstance.destroy();
	}
});
</script>

<style scoped>
.relative {
	position: relative;
}
</style>
