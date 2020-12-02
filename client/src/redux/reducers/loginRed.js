import {LOGIN} from '../actions/types'
import state from '../state'

let startingState = {...state}

console.log('find the state login ', startingState)

export default function(state = {...startingState.user}, action){
    switch(action.type){
        case LOGIN:
        let newState = [{...state}]
        return newState = action.payload.user
        default: return state
    }

}

