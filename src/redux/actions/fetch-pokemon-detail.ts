import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"

const BASE_URL_API = "https://pokeapi.co/api/v2/";

export const fetchPokemonDetail = createAsyncThunk('fetchPokemonDetail', async (id: number) => {
    const urlPath = `pokemon/${id}`
    return axios
        .get(BASE_URL_API + urlPath)
        .then(response => response.data)
}
)