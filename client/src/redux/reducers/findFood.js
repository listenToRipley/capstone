import {FETCH_FOOD, RESET_FOOD_SEARCH} from '../actions/types'
import state from '../state'

let initialState = {...state}
let searchResults = []

export default function(state = [...initialState.searchResults], action) {
  // console.log('tell me about the food state on reducer> ', state)
  switch(action.type) {
    case FETCH_FOOD:
      return newState = action.payload.searchResults
    case RESET_FOOD_SEARCH:
      return searchResults
    default: return state
  }
}