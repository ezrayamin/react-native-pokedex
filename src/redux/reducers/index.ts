import {combineReducers} from "@reduxjs/toolkit"
// import headerMenuReducer from "./header-menu"
import PokemonDetailReducer from "./fetch-pokemon-detail"


const reducers = {
    pokemon: PokemonDetailReducer
}

export default reducers
