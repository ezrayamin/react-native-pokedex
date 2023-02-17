import Pokemons from "./pokemon-list";

export default class Pagination {
    count: number;
    next: string | null;
    previous: string | null;
    results: Pokemons[];
    
    constructor(
        count: number,
        next: string,
        previous: string,
        results: Pokemons[],
    ) {
        this.count = count;
        this.next = next;
        this.previous = previous;
        this.results = results;
    }
}