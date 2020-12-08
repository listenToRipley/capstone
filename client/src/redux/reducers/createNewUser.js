import {CREATE_NEW_USER, RESET_NEW_USER} from '../actions/types'
import state from '../state'

let initialState = {...state}
let reset = {
  newUser: false 
}

export default function(state = {...initialState}, actions){
  console.log('what the payload look like?', state)
  switch(actions.type) {
    case CREATE_NEW_USER: 
    let newState = [{...state.newUser}]
    return newState = [actions.payload.newUser]
    case RESET_NEW_USER: 
    return newState= reset
    default: return state
  }
}