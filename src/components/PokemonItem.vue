<template>
    <section class="pokemon-item">
        <p class="pokemon-item-name">{{ pokemon.name }}</p>
        <Favorite :name="pokemon.name" @click.stop />
    </section>
</template>

<script setup lang="ts">
import type { Pokemon } from '@/types/pokemon';
import Favorite from '@/components/Favorite.vue';

defineProps<{ pokemon: Pokemon }>();
</script>

<style scoped>
@import "tailwindcss";

.pokemon-item {
    @apply px-4 py-2 bg-white shadow-xs flex justify-between items-center rounded-lg cursor-pointer border border-[var(--color-gray-accent-2)]/10;
}

.pokemon-item-name {
    @apply text-lg capitalize;
}
</style>
