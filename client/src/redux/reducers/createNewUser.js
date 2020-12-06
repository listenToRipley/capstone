import {CREATE_NEW_USER} from '../actions/types'
import state from '../state'

let initialState = {...state}
console.log('state is what for new user? ', state)

export default function(state = {...initialState}, actions){
  switch(actions.type) {
    case CREATE_NEW_USER: 
    let newState = [{...state.newUser}]
    return newState = [action.payload.newUser]
    default: return state
  }
}