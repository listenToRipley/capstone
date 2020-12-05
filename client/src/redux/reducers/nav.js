import {USER_DETAILS, ITEMS_ON_SHOPPING_LIST,LOGOUT} from '../actions/types'
import state from '../state'

let initialState = {...state}

console.log('find the state nav bar ', initialState)

export default function(state = {...initialState.userDetails}, action){
    switch(action.type){
        case USER_DETAILS:
        return action.payload.userDetails
        case LOGOUT: 
        return action.payload
        default: return state
    }
}
