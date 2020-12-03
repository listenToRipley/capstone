import {LOGIN, LOGOUT} from '../actions/types'
import state from '../state'

let startingState = {...state.user}

console.log('find the state login ', startingState)

export default function(state = {...startingState}, action){
    switch(action.type){
        case LOGIN:
        let newState = [{...state}]
        return newState = action.payload.user
        default: return state
    }

}

