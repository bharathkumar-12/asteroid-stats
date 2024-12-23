<template>
	<div
		class="flex w-full flex-col justify-center gap-3 p-6 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white rounded-xl shadow-xl hover:scale-105 transition-transform"
	>
		<div
			v-if="statTitle"
			class="text-base font-medium uppercase tracking-wider opacity-90"
		>
			{{ statTitle }}
		</div>
		<div v-if="astName" class="text-2xl font-bold drop-shadow-lg">
			{{ astName }}
		</div>
		<div v-else>
			&nbsp;
		</div>
		<div
			class="text-4xl font-extrabold underline decoration-dashed decoration-yellow-400"
		>
			{{ formattedValue }}
		</div>
		<div v-if="unit" class="text-sm font-light opacity-80 self-end">
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
