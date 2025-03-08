<template>
  <button class="button" :class="{ 'button--disabled': props.disabled }">
    <span v-if="props.icon" class="button-icon-wrapper">
      <component :is="props.icon" class="button-icon" />
    </span>
    <slot></slot>
  </button>
</template>

<script setup lang="ts">
import { defineProps, type Component } from "vue";

const props = defineProps<{
  disabled?: boolean;
  icon?: Component;
}>();
</script>

<style scoped>
@import "tailwindcss";

.button {
  @apply bg-[var(--color-red)] text-white font-medium text-base rounded-full px-5 py-2.5 inline-flex items-center justify-center gap-x-2 cursor-pointer flex-shrink-0 transition-colors;
}

.button:hover,
.button:focus {
  @apply bg-[var(--color-red-accent)];
}

.button--disabled {
  @apply bg-[var(--color-gray-accent-2)] opacity-75;
}

.button--disabled:hover,
.button--disabled:focus {
  @apply bg-[var(--color-gray-accent-2)];
}

.button-icon-wrapper {
  @apply flex items-center;
}

.button-icon {
  @apply w-5 h-5;
}
</style>
