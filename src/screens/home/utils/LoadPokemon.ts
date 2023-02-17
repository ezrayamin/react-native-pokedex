import axios from "axios";
import Pagination from "../../../models/pagination";
const fetchPokemonLimit = 4;

function pokemonListUrl(offset: number): string {
    return `https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=${fetchPokemonLimit}`
}

function selectedPokemonUrl(id: number): string {
    return `https://pokeapi.co/api/v2/pokemon/${id}`
}
export async function fetchPokemons(offset: number): Promise<Pagination> {
    const url = pokemonListUrl(offset)
    try {
        const fetch = await axios.get(url)
        const response = await fetch.data;

        return response
    }
    catch (err) {
        return {
            count: 0,
            next: null,
            previous: null,
            results: []
        }
    }
}

export async function fetchSelectedPokemon(id: number) {
    const url = selectedPokemonUrl(id)
    try {
        const fetch = await axios.get(url)
        const response = await fetch.data;

        return response
    }
    catch (err) {
        return []
    }
}
