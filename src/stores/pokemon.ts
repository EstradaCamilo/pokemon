import { defineStore } from 'pinia';
import { ref, computed } from 'vue';
import { PokemonService } from '@/services/pokemon';
import type { Pokemon } from '@/types/pokemon';

export const usePokemonStore = defineStore(
  'pokemon',
  () => {
    const pokemons = ref<Pokemon[]>([]);
    const favorites = ref<string[]>([]);
    const selectedPokemon = ref<any | null>(null);

    const fetchPokemons = async (): Promise<void> => {
      try {
        const response = await PokemonService.fetchPokemons();
        pokemons.value = response;
      } catch (error) {
        throw error;
      }
    };

    const fetchPokemonByName = async (name: string): Promise<void> => {
      try {
        const response = await PokemonService.fetchPokemonByName(name);
        selectedPokemon.value = response;
      } catch (error) {
        selectedPokemon.value = null;
        throw error;
      }
    };

    const toggleFavorite = (name: string): void => {
      favorites.value = favorites.value.includes(name)
        ? favorites.value.filter((fav) => fav !== name)
        : [...favorites.value, name];
    };

    const favoritePokemons = computed<Pokemon[]>(() =>
      pokemons.value.filter((p) => favorites.value.includes(p.name))
    );

    return {
      pokemons,
      favorites,
      selectedPokemon,
      fetchPokemons,
      fetchPokemonByName,
      toggleFavorite,
      favoritePokemons,
    };
  },
  { persist: true }
);
