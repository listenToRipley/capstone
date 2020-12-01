import {LOGIN} from '../actions/types'
import state from '../state'

let startingState = {...state}

console.log('find the state ? ', startingState)

export default function(state = {...startingState.user}, action){
    console.log(action.payload)
    switch(action.type){
        case LOGIN:
        let newState = [{...state.user}]
        return newState = action.payload.user
        default: return state
    }

}