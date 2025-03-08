<template>
    <button class="favorite" @click="pokemonStore.toggleFavorite(name)">
        <PhStarFill class="icon"
            :class="isFavorite ? 'text-[var(--color-yellow)]' : 'text-[var(--color-gray-accent-2)]'" />
    </button>
</template>

<script setup lang="ts">
import { defineProps, computed } from 'vue';
import { usePokemonStore } from '@/stores/pokemon';
import PhStarFill from '@/components/icons/PhStarFill.vue';

const props = defineProps<{ name: string }>();

const pokemonStore = usePokemonStore();

const isFavorite = computed(() => pokemonStore.favorites.includes(props.name));
</script>

<style scoped>
@import "tailwindcss";

.favorite {
    @apply bg-[var(--color-gray-accent-1)] flex items-center justify-center rounded-full p-2 cursor-pointer size-[44px];
}

.icon {
    @apply size-5;
}
</style>
