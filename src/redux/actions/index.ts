import axios from "axios"
import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'

const BASE_URL_API = "https://pokeapi.co/api/v2/";

export const fetchPokemonList = createAsyncThunk('fetchPokemonList', async (offset: number) => {
    const urlPath = `pokemon?offset=${offset}&limit=4`
    return axios
        .get(BASE_URL_API + urlPath)
        .then(response => response.data)

})

export const fetchPokemonDetail = createAsyncThunk('fetchPokemonDetail', async (id: number) => {
    const urlPath = `pokemon/${id}`
    return axios
        .get(BASE_URL_API + urlPath)
        .then(response => response.data)
}
)
export const fetchPokemonType = createAsyncThunk('fetchPokemonType', async (id?: number) => {
    let urlPath = "type/"

    // check if certain type is selected or not
    if (typeof(id) !== "undefined") {
        // ex: https://pokeapi.co/api/v2/type/12
        urlPath += id
    }

    return axios
        .get(BASE_URL_API + urlPath)
        .then(response => response.data)
})

// export const axiosRequestGet = createAsyncThunk('axiosRequestGet', async (params, path) => {

//     // const url = config
//     const response = await axios({
//         method: 'GET',
//         baseURL: BASE_URL_API,
//         // url: config
//     })
// })
