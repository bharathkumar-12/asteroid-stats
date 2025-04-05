<template>
	<div class="flex flex-col h-full">
		<div class="text-sm font-light text-blue-400 mb-2">
			{{ statTitle }}
		</div>
		<div v-if="astName" class="text-lg text-gray-300 mb-4">
			{{ astName }}
		</div>
		<div v-else class="h-6"></div>
		<div class="text-3xl font-light text-white mb-2">
			{{ formattedValue }}
		</div>
		<div v-if="unit" class="text-sm text-gray-400">
			{{ unit }}
		</div>
	</div>
</template>

<script setup>
const props = defineProps({
	statTitle: {
		type: String,
		required: true,
	},
	statValue: {
		type: [Number, String],
		required: true,
	},
	unit: {
		type: String,
		required: false,
	},
	astName: {
		type: String,
	},
});

// Computed property to format the value
const formattedValue = computed(() => {
	if (typeof props.statValue === "number") {
		return props.statValue.toLocaleString();
	}
	return props.statValue;
});
</script>
