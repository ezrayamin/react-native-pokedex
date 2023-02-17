import {configureStore} from "@reduxjs/toolkit"
import reducers from "./reducers";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import pokemonDetailSlice from "./reducers/fetch-pokemon-detail"; "./reducers/fetch-pokemon-detail"
// export const store = createStore(
//     reducers,
//     {},
//     applyMiddleware(thunk)
// )

export const store = configureStore({
    reducer: {
        pokemon: pokemonDetailSlice
    }

}
)

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
// export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;