import {FETCH_FOOD} from '../actions/types'
import state from '../state'

let initialState = {...state}

export default function(state = [], action) {
  switch(action.type) {
    case FETCH_FOOD:
      let newState = [{...state.searchFood}]
      return newState = action.payload.searchFood
    case RESET_FOOD_SEARCH:
      return newState = action.payload.searchFood
    default: return state
  }
}