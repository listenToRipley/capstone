import {RESET_FOOD_SEARCH} from '../actions/types'
import state from '../state'

let initialState = {...state}

export default function(state = {...initialState}, action) {
 
  switch(action.type) {
    case RESET_FOOD_SEARCH:
    return action.payload
    default: return state
  }
}