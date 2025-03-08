import { API_BASE_URL } from '../../conf/env';

const fetchPokemons = async (limit = 20) => {
  const response = await fetch(`${API_BASE_URL}/pokemon?limit=${limit}`);
  if (!response.ok) throw new Error('Error al obtener los Pokémon');
  const data = await response.json();
  return data.results;
};

const fetchPokemonByName = async (name: string) => {
  const response = await fetch(`${API_BASE_URL}/pokemon/${name}`);
  if (!response.ok) throw new Error(`No se ha encontrado el Pokémon ${name}`);
  return response.json();
};

export const PokemonService = {
  fetchPokemons,
  fetchPokemonByName,
};
