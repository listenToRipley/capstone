import {FIND_FOOD, RESET_FOOD_SEARCH} from '../actions/types'
import state from '../state'

let initialState = {...state}

export default function(state = [...initialState.searchResults], action){
  console.log('redicers ',action.payload)
  switch(action.type) {
    case FIND_FOOD: 
    let newState = [...state.searchResults]
    return newState = [...actions.payload]
    // case RESET_FOOD_SEARCH:
    //   let resetState  = [...state.searchResults]
    //   return resetState = []
    default: return state 
  }
}