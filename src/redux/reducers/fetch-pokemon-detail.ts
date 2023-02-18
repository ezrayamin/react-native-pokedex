import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { fetchPokemonDetail } from "../actions"

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

type Pokemon = {
    id: number,
    weight: number,
    height: number,
    name: string,
    types: Types[]
    abilities: Abilities[]
}

type InitialState = {
    isLoading: boolean
    selectedPokemon: Pokemon
    errorMessage: string
}

const initialState: InitialState = {
    isLoading: true,
    selectedPokemon: {
        id: 0,
        weight: 999,
        height: 999,
        name: '',
        types: [],
        abilities: []
    },
    errorMessage: ''
}

const pokemonDetailSlice = createSlice({
    name: 'pokemonDetail',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(fetchPokemonDetail.pending, state => {
            state.isLoading = true
        })
        builder.addCase(fetchPokemonDetail.fulfilled, (state, action: PayloadAction<Pokemon>) => {
            state.isLoading = false
            state.selectedPokemon = action.payload
            state.errorMessage = ""
        })
        builder.addCase(fetchPokemonDetail.rejected, (state, action) => {
            state.isLoading = false
            state.errorMessage = "Something went wrong"
        })
    }
})

export default pokemonDetailSlice.reducer;