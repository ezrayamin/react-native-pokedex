
import { headerMenuStatus } from '../action-enums';
import {Action} from '../actions'
const INITIAL_STATE = 'bars';

const headerMenuReducer = (state: string = INITIAL_STATE, action: Action) => {
    switch(action.type) {
        case headerMenuStatus.close:
            return 'times'
        default:
            return state
    }
}

export default headerMenuReducer