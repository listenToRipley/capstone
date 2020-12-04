import {LOGIN} from '../actions/types'
import state from '../state'

let startingState = {...state}

console.log('find the state login ', startingState)

export default function(state = {...startingState}, action){
    switch(action.type){
        case LOGIN:
        let userState = {...state.user}
        return userState = action.payload.user
        default: return state
    }

}

