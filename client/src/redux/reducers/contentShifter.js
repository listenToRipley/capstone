import {DRAWER_STATE} from '../actions/types'
import state from '../state'

let initialState = {...state}

export default function(state = {...initialState.openDrawer}, action){
    switch(action.type){
        case DRAWER_STATE: 
        return action.payload.openDrawer
        default: return state
    }
}