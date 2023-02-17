import Pokemons from "./pokemon-list";

export default class Type {
    id: number;
    name: string;
    pokemon: PokemonsInType[];
    
    constructor(
        id: number,
        name: string,
        pokemon: PokemonsInType[],
    ) {
        this.id = id;
        this.name = name;
        this.pokemon = pokemon;
    }
}

export type PokemonsInType = {
    slot: number,
    pokemon: Pokemons
} 
