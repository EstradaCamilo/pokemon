<template>
    <div class="search-wrapper">
        <PhMagnifyingGlassBold class="search-icon" />
        <input :value="modelValue" @input="updateValue" type="search" placeholder="Search..." class="search-input" />
    </div>
</template>

<script setup lang="ts">
import PhMagnifyingGlassBold from "@/components/icons/PhMagnifyingGlassBold.vue";

defineProps<{ modelValue: string }>();
const emit = defineEmits(["update:modelValue"]);

let timeout: ReturnType<typeof setTimeout> | null = null;

const updateValue = (event: Event) => {
    const newValue = (event.target as HTMLInputElement).value;
    if (timeout) clearTimeout(timeout);
    timeout = setTimeout(() => {
        emit("update:modelValue", newValue);
    }, 300);
};
</script>

<style scoped>
@import "tailwindcss";

.search-wrapper {
    @apply relative w-full;
}

.search-icon {
    @apply absolute left-4 top-1/2 -translate-y-1/2 size-5 text-[var(--color-gray-accent-2)];
}

.search-input {
    @apply text-[var(--color-gray-accent-2)] rounded-lg w-full pl-12 pr-4 py-3 bg-white shadow-xs border border-[var(--color-gray-accent-2)]/10 focus:ring-2 focus:ring-[var(--color-red)] focus:outline-none;
}

.search-input:focus {
    @apply text-[var(--color-gray-accent-3)];
}
</style>
