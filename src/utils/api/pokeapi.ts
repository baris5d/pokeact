import axios from 'axios';
import { PokeAPIResource, Pokemon } from '../../types/pokemon';

const api = axios.create({
    baseURL: 'https://pokeapi.co/api/v2',
});

export const getAllPokemons = async (
    endpoint: string,
    parameters?: any,
): Promise<PokeAPIResource[]> => {
    const result = await api.get(endpoint, { params: parameters });
    return result.data.results;
};

export const getPokemon = async (url: string): Promise<Pokemon> => {
    const result = await api.get(url);
    return result.data;
};
