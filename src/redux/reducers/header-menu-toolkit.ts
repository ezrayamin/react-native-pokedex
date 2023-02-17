import { createReducer, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { access } from "fs";
// import { openHeaderMenu, closeHeaderMenu } from "../action-toolkit";
import { Action } from "../actions"

enum headerMenuIcons {
    closed = 'bars',
    open = 'times',
}
const initialState = headerMenuIcons.closed;

// export const HeaderMenu = createReducer(initialState, (builder) => {
//     builder
//     .addCase(openHeaderMenu, (state, action) => {
//         state = headerMenuIcons.open
//     })
//     .addCase(closeHeaderMenu, (state, action) => {
//         state = headerMenuIcons.closed
//     })
//     .addDefaultCase((state, action) => {
//         state = initialState
//     })
// })
const HeaderMenu = createSlice({
    name: 'header menu',
    initialState,
    reducers: {
        openHeaderMenu: state => {
            state = headerMenuIcons.open
        },
        closeHeaderMenu: state => {
            state = headerMenuIcons.closed
        },
    }
})

export default HeaderMenu.reducer
export const {openHeaderMenu, closeHeaderMenu} = HeaderMenu.actions