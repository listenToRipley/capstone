import {YOUR_SHOPPING_LIST} from '../actions/types'
import state from '../state'

let initialState = {...state}

export default function(state = {...initialState.userShopList}, action) {
  switch(action.type) {
    case YOUR_SHOPPING_LIST:
    return action.payload.userShopList
    default: return state
  }
}