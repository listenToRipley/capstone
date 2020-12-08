import {USER_DETAILS, LOGOUT} from '../actions/types'
import state from '../state'

let initialState = {...state}

export default function(state = {...initialState.userDetails}, action){
    switch(action.type){
        case USER_DETAILS:
        return action.payload.userDetails
        default: return state
    }
}