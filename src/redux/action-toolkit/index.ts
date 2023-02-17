import {createAsyncThunk, createAction} from '@reduxjs/toolkit'

export const openHeaderMenu = createAction<String>("openHeaderMenu")
export const closeHeaderMenu = createAction<String>("closeHeaderMenu")