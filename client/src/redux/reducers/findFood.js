import {FETCH_FOOD} from '../actions/types'
import state from '../state'

let initialState = {...state}

export default function(state = [...initialState.searchFood], action) {
  console.log('tell me about the food state on reducer> ', state)
  switch(action.type) {
    case FETCH_FOOD:
      return newState = action.payload.searchFood
    case RESET_FOOD_SEARCH:
      return newState = action.payload.searchFood
    default: return state
  }
}