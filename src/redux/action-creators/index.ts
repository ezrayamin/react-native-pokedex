import { Dispatch } from "redux"
import { headerMenuStatus } from "../action-enums"
import { Action } from "../actions"

export const openHeaderMenu = () => {
    return (dispatch: Dispatch<Action>) => {
        dispatch({
            type: headerMenuStatus.open
        })
    }
}

export const closeHeaderMenu = () => {
    return (dispatch: Dispatch<Action>) => {
        dispatch({
            type: headerMenuStatus.close
        })
    }
}