<template>
    <div class="w-full p-8 mx-auto sm:max-w-xl">
        <div class="grid gap-2 pb-[54px]">
            <div class="!sticky top-[32px]">
                <SearchInput v-model="searchQuery" />
            </div>
            <PokemonItem v-for="pokemon, p in filteredPokemons" :key="p" :pokemon="pokemon"
                @click="showDetailsPokemon(pokemon)" />
            <NotFound v-if="notFound" />
        </div>
    </div>

    <ModalPokemon v-model="isOpenModalDetails" :pokemon="pokemonStore.selectedPokemon" />

    <FilterBar :options="options" v-model="selectedFilter" />

    <div
        class="w-full fixed bottom-0 left-0 right-0 bg-white py-4 shadow-2xl border-t border-[var(--color-gray-accent-2)]/10">
        <div class="w-full px-8 mx-auto sm:max-w-xl grid grid-cols-2 gap-4">
            <Button v-for="(option, index) in options" :key="index" :icon="option.icon"
                :disabled="selectedFilter !== option.value" @click="selectedFilter = option.value">
                {{ option.label }}
            </Button>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';
import type { Component } from "vue";
import type { Pokemon } from '@/types/pokemon';

import PhStarFill from '@/components/icons/PhStarFill.vue';
import PhListDashesBold from '@/components/icons/PhListDashesBold.vue';

import Button from '@/components/Button.vue';
import PokemonItem from '@/components/PokemonItem.vue';
import ModalPokemon from '@/components/ModalPokemon.vue';
import SearchInput from '@/components/SearchInput.vue';
import NotFound from '@/components/NotFound.vue';

import { useLoaderStore } from '@/stores/loader';
import { usePokemonStore } from '@/stores/pokemon';

type FilterOption = 'all' | 'favorites';

interface Option {
    value: FilterOption;
    label: string;
    icon?: Component;
}

const loaderStore = useLoaderStore();
const pokemonStore = usePokemonStore();

const options: Option[] = [
    { value: 'all', label: 'All', icon: PhListDashesBold },
    { value: 'favorites', label: 'Favorites', icon: PhStarFill }
];

const selectedFilter = ref<FilterOption>('all');


const isOpenModalDetails = ref<boolean>(false);

const showDetailsPokemon = async (pokemon: Pokemon) => {
    try {
        loaderStore.startLoading();
        await pokemonStore.fetchPokemonByName(pokemon.name);
        isOpenModalDetails.value = true;
    } catch (error) {
        console.error(error);
    } finally {
        loaderStore.stopLoading();
    }
};

const searchQuery = ref<string>('');

const filteredPokemons = computed<Pokemon[]>(() => {
    const list = selectedFilter.value === 'favorites' ? pokemonStore.favoritePokemons : pokemonStore.pokemons;
    if (!searchQuery.value) return list;
    return list.filter(pokemon =>
        pokemon.name.toLowerCase().includes(searchQuery.value?.toLowerCase())
    );
});

const notFound = computed(() => searchQuery.value && filteredPokemons.value.length === 0);

onMounted(async () => {
    loaderStore.startLoading();
    await pokemonStore.fetchPokemons();
    loaderStore.stopLoading();
});
</script>
