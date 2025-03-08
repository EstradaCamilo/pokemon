<template>
    <div v-if="loaderStore.isLoading" class="loader">
        <img src="/images/pokebola.png" alt="Loading...">
    </div>
</template>

<script setup lang="ts">
import { useLoaderStore } from '@/stores/loader';
const loaderStore = useLoaderStore();
</script>
<style scoped>
@import "tailwindcss";

.loader {
    @apply fixed z-10 top-0 left-0 h-screen w-screen bg-[var(--color-gray-accent-1)] flex items-center justify-center;
}

.loader img {
    @apply size-24 animate-pulse;
}
</style>