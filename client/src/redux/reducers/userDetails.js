import {USER_INFORMATION} from '../actions/types'
import state from '../state'

let startingState = {...state}

console.log('find the state ?  this is for updates',startingState)

export default function(state = {...startingState}, action){
    console.log('nav bar action payload',action.payload)
    switch(action.type){
        case USER_INFORMATION:
        let newState = [{...state.userDetails}]
        return newState = action.payload.userDetails
        default: return state
    }

}
