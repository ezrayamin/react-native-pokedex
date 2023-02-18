import { createSlice } from '@reduxjs/toolkit';

type InitialState = {
    isHeaderMenuOpen: boolean
}

const initialState: InitialState = {
    isHeaderMenuOpen: false
}

const headerMenuSlice = createSlice({
    name: "header",
    initialState: {
        isHeaderMenuOpen: false
    },
    reducers: {
        open: state => {
            state.isHeaderMenuOpen = true
        },
        close: state => {
            state.isHeaderMenuOpen = false
        }
    }
})

const reducer = headerMenuSlice.reducer
export default reducer
export const {open, close} = headerMenuSlice.actions