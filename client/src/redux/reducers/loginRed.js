import {LOGIN , USER_INFORMATION} from '../actions/types'
import state from '../state'

let startingState = {...state}

console.log('find the state login ', startingState)

export default function(state = {...startingState}, action){
    switch(action.type){
        case LOGIN:
        let userState = {...state}
        return userState = action.payload
        case USER_INFORMATION: 
        let infoState = {...state}
        return infoState = action.payload
        default: return state
    }

}

