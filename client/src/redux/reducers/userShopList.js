import {YOUR_SHOPPING_LIST, ADD_ITEM_TO_SHOPPING_LIST} from '../actions/types'
import state from '../state'

let initialState = {...state}

export default function(state = {...initialState.userShopList}, action) {
 
  switch(action.type) {
    case YOUR_SHOPPING_LIST:
    return action.payload.userShopList
    case ADD_ITEM_TO_SHOPPING_LIST: 
    return action.payload.userShopList //the result of this action should be an amended shop list 
    default: return state
  }
}