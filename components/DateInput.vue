<template>
	<div>
		<label :for="id" class="block text-sm font-medium text-gray-700">
			{{ label }} <span v-if="required" class="text-red-500">*</span>
		</label>
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
const inputClasses =
	"mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm placeholder:text-customGray placeholder:font-medium";

// Computed properties for min and max date based on allowedRange
const computedMinDate = computed(() => {
	return props.allowedRange?.start || ""; // Default to no restriction if not provided
});

const computedMaxDate = computed(() => {
	return props.allowedRange?.end || ""; // Default to no restriction if not provided
});
</script>
