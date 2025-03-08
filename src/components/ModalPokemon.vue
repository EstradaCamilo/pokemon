<template>
    <Teleport to="body">
        <div v-show="modelValue" class="modal-backdrop" @click.self="closeModal">
            <div class="modal-wrapper">
                <div class="modal-container">
                    <div class="modal-header">
                        <button @click="closeModal" class="close-button">
                            <PhXCircleFill class="close-icon" />
                        </button>
                        <img :src="pokemon.sprites.other.dream_world.front_default" :alt="pokemon.name">
                    </div>

                    <div class="modal-body">
                        <p v-for="(value, key) in pokemonStats" :key="key" class="stat-item">
                            <span class="stat-label">{{ key }}:</span>
                            <span class="stat-value">{{ value }}</span>
                        </p>
                        <div class="modal-footer">
                            <Button @click="handleCopy">Share to my friends</Button>
                            <Favorite :name="pokemon.name" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Teleport>
</template>

<script setup lang="ts">
import { defineProps, defineEmits, computed, watch } from 'vue';
import Button from '@/components/Button.vue';
import Favorite from '@/components/Favorite.vue';
import PhXCircleFill from '@/components/icons/PhXCircleFill.vue';

const props = defineProps<{ modelValue: boolean; pokemon: any }>();
const emit = defineEmits(['update:modelValue']);

const closeModal = () => {
    emit('update:modelValue', false);
};

const pokemonStats = computed(() => ({
    Name: props.pokemon.name,
    Weight: props.pokemon.weight,
    Height: props.pokemon.height,
    Types: props.pokemon.types.map((t: any) => t.type.name).join(', '),
}));

const handleCopy = async () => {
    const pokemonData = `Name:${pokemonStats.value.Name}, Weight:${pokemonStats.value.Weight}, Height:${pokemonStats.value.Height}, Types:${pokemonStats.value.Types}`;
    try {
        await navigator.clipboard.writeText(pokemonData);
    } catch (error) {
        console.error('Error al copiar:', error);
    }
};

watch(
    () => props.modelValue,
    (isOpen) => {
        document.body.style.overflow = isOpen ? 'hidden' : '';
    }
);
</script>

<style scoped>
@import "tailwindcss";

.modal-backdrop {
    @apply fixed inset-0 flex items-center justify-center bg-[var(--color-gray-accent-3)]/70;
}

.modal-wrapper {
    @apply w-full px-8 mx-auto sm:max-w-xl rounded-lg;
}

.modal-container {
    @apply bg-white rounded-lg shadow-lg relative;
}

.modal-header {
    @apply min-h-[220px] bg-[url(/images/bg-pokemon.png)] bg-cover rounded-t-lg flex items-center justify-center relative;
}

.close-button {
    @apply absolute top-4 right-4 cursor-pointer bg-transparent border-none;
}

.close-icon {
    @apply w-8 h-8 text-white;
}

.modal-header img {
    @apply w-40 h-40;
}

.modal-body {
    @apply p-4 divide-y divide-[var(--color-gray-accent-2)]/30 space-y-2;
}

.stat-item {
    @apply text-lg text-[var(--color-gray-accent-3)] pb-2;
}

.stat-label {
    @apply font-medium pr-1;
}

.stat-value {
    @apply capitalize;
}

.modal-footer {
    @apply flex justify-between items-center mt-4;
}
</style>
