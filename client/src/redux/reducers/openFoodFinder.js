import {OPEN_FOOD_FINDER} from '../actions/types'
import state from '../state'

let initialState = {...state}

export default function(state = {...initialState.openFoodFinder}, action) {
 
  switch(action.type) {
    case OPEN_FOOD_FINDER:
    return action.payload.openFoodFinder
    default: return state
  }
}