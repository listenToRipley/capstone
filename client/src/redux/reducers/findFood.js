import {FETCH_FOOD} from '../actions/types'
import state from '../state'

let initialState = {...state}

export default function(state = [...initialState.searchResults], action) {
  console.log('tell me about the food state on reducer> ', state)
  switch(action.type) {
    case FETCH_FOOD:
      return newState = action.payload.searchResults
    default: return state
  }
}