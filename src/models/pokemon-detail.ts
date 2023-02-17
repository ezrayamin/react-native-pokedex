export default class PokemonDetail {
    id: number;
    weight: number;
    height: number;
    name: string;
    types: Types[];
    abilities: Abilities[]
    
    constructor(
        id: number,
        weight: number,
        height: number,
        name: string,
        types: Types[],
        abilities: Abilities[],
    ) {
        this.id = id;
        this.weight = weight;
        this.height = height;
        this.name = name;
        this.types = types;
        this.abilities = abilities;
    }
}

type Type = {
    name: string,
    url: string,
}
type Types = {
    slot: number,
    type: Type
}

type Ability = {
    name: string,
    url: string,
}

type Abilities = {
    isHidden: boolean,
    ability: Ability
}
