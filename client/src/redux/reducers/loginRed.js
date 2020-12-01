import {LOGIN} from '../actions/types'
import state from '../state'

let startingState = {...state.user}

console.log('find the state ? ', {...startingState})

export default function(state = startingState, action){
    console.log(action.payload)
    switch(action.type){
        case LOGIN:
        let newState = [...state.user, action.payload.user]
        return newState
        default: return state
    }

}