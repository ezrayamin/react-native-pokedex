import { configureStore } from "@reduxjs/toolkit"
import headerMenuReducer from "./reducers/header-menu"

export const store = configureStore({
    reducer: {
        headerMenu: headerMenuReducer
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;