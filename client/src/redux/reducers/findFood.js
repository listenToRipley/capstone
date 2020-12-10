import {FIND_FOOD, RESET_FOOD_SEARCH} from '../actions/types'
import state from '../state'

let initialState = {...state}

export default function(state = [...initialState.searchResults], action){
  console.log(`state on food reducers? `, state)

  switch(action.type) {
    case FIND_FOOD: 
    return actions.payload.searchResults
    // case RESET_FOOD_SEARCH:
    //   let resetState  = [...state.searchResults]
    //   return resetState = []
    default: return state 
  }
}