import {USER_INFORMATION} from '../actions/types'
import state from '../state'

let startingState = {...state}

console.log('this is the state for the nav bar', startingState)

export default function(state ={...startingState}, action) {
  console.log('action payload on nav bar', action.payload)
  switch(action.type) {
    case USER_INFORMATION: 
    let newState = [{...state}]
    return newState = action.payload
    default: return stat
  }
}