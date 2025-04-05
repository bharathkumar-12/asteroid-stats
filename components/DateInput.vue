<template>
	<div>
		<label :for="id" class="block text-sm font-light text-gray-300 mb-2">
			{{ label }} <span v-if="required" class="text-blue-400">*</span>
		</label>
		<div class="relative">
			<input
				:type="type"
				:id="id"
				:value="modelValue"
				:class="inputClasses"
				:required="required"
				:min="computedMinDate"
				:max="computedMaxDate"
				@input="$emit('update:modelValue', $event.target.value)"
			/>
			<div class="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
				<svg class="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
				</svg>
			</div>
		</div>
	</div>
</template>

<script setup>
import { computed } from "vue";

// Define props
const props = defineProps({
	label: {
		type: String,
		required: true,
	},
	id: {
		type: String,
		required: true,
	},
	modelValue: {
		type: String,
		required: false,
	},
	required: {
		type: Boolean,
		default: false,
	},
	type: {
		type: String,
		default: "date",
	},
	allowedRange: {
		type: Object,
		required: false,
		default: () => null, // Defaults to no restriction
	},
});

// Define input classes
const inputClasses = computed(() => {
	return [
		"w-full pl-4 pr-12 py-3 rounded-lg text-white",
		"bg-white/5 border border-white/10",
		"focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-black",
		"placeholder:text-gray-500",
		"transition-all duration-300",
		"hover:border-white/20",
		"[&::-webkit-calendar-picker-indicator]:opacity-0 [&::-webkit-calendar-picker-indicator]:absolute [&::-webkit-calendar-picker-indicator]:right-0 [&::-webkit-calendar-picker-indicator]:w-full [&::-webkit-calendar-picker-indicator]:h-full",
	].join(" ");
});

// Computed properties for min and max date based on allowedRange
const computedMinDate = computed(() => {
	return props.allowedRange?.start || ""; // Default to no restriction if not provided
});

const computedMaxDate = computed(() => {
	return props.allowedRange?.end || ""; // Default to no restriction if not provided
});
</script>

<style>
/* Style the date input's calendar popup */
input[type="date"] {
	color-scheme: dark;
}

/* Firefox specific styles */
input[type="date"] {
	appearance: none;
	-moz-appearance: none;
}

/* Chrome/Safari specific styles */
input[type="date"]::-webkit-datetime-edit {
	color: white;
}

input[type="date"]::-webkit-datetime-edit-fields-wrapper {
	color: white;
}

input[type="date"]::-webkit-datetime-edit-text {
	color: white;
}

input[type="date"]::-webkit-datetime-edit-month-field {
	color: white;
}

input[type="date"]::-webkit-datetime-edit-day-field {
	color: white;
}

input[type="date"]::-webkit-datetime-edit-year-field {
	color: white;
}
</style>
