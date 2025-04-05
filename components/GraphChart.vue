<template>
	<div class="relative w-full h-full">
		<canvas ref="chartCanvas" class="w-full h-full"></canvas>
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
	const canvasElement = chartCanvas.value;
	if (!canvasElement) {
		console.error("Canvas element not found!");
		return;
	}

	const ctx = canvasElement.getContext("2d");

	// Destroy existing chart instance if it exists
	if (chartInstance) {
		chartInstance.destroy();
	}

	// Create gradient for the line
	const gradient = ctx.createLinearGradient(0, 0, 0, canvasElement.height);
	gradient.addColorStop(0, 'rgba(59, 130, 246, 0.5)'); // blue-500 with opacity
	gradient.addColorStop(1, 'rgba(59, 130, 246, 0)');

	// Create a new chart
	chartInstance = new Chart(ctx, {
		type: props.chartType,
		data: {
			labels: props.labels,
			datasets: [
				{
					label: "Number of Asteroids",
					data: props.dataPoints,
					borderColor: 'rgb(59, 130, 246)', // blue-500
					backgroundColor: gradient,
					borderWidth: 2,
					tension: 0.4,
					fill: true,
					pointBackgroundColor: 'rgb(59, 130, 246)',
					pointBorderColor: 'rgb(59, 130, 246)',
					pointBorderWidth: 2,
					pointRadius: 4,
					pointHoverRadius: 6,
					pointHoverBackgroundColor: 'rgb(59, 130, 246)',
					pointHoverBorderColor: 'white',
					pointHoverBorderWidth: 2,
				},
			],
		},
		options: {
			responsive: true,
			maintainAspectRatio: false,
			interaction: {
				mode: 'index',
				intersect: false,
			},
			plugins: {
				legend: {
					display: false,
				},
				tooltip: {
					backgroundColor: 'rgba(0, 0, 0, 0.8)',
					titleColor: 'rgb(156, 163, 175)', // gray-400
					bodyColor: 'white',
					padding: 12,
					cornerRadius: 8,
					displayColors: false,
					callbacks: {
						label: function(context) {
							return `${context.parsed.y} asteroids`;
						}
					}
				},
			},
			scales: {
				x: {
					grid: {
						color: 'rgba(255, 255, 255, 0.1)',
						drawBorder: false,
					},
					ticks: {
						color: 'rgb(156, 163, 175)', // gray-400
						font: {
							size: 12,
						},
					},
					title: {
						display: true,
						text: "Dates",
						color: 'rgb(156, 163, 175)', // gray-400
						font: {
							size: 14,
							weight: 'light',
						},
						padding: {
							top: 10,
						},
					},
				},
				y: {
					grid: {
						color: 'rgba(255, 255, 255, 0.1)',
						drawBorder: false,
					},
					ticks: {
						color: 'rgb(156, 163, 175)', // gray-400
						font: {
							size: 12,
						},
					},
					title: {
						display: true,
						text: "Asteroids",
						color: 'rgb(156, 163, 175)', // gray-400
						font: {
							size: 14,
							weight: 'light',
						},
						padding: {
							bottom: 10,
						},
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
