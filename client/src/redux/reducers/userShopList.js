import {YOUR_SHOPPING_LIST, ADD_ITEM_TO_SHOPPING_LIST, REMOVE_FROM_SHOPPING_LIST, UPDATE_ITEM_ON_SHOPPING_LIST} from '../actions/types'
import state from '../state'

let initialState = {...state}

export default function(state = {...initialState.userShopList}, action) {
 
  switch(action.type) {
    case YOUR_SHOPPING_LIST:
    return action.payload.userShopList
    case ADD_ITEM_TO_SHOPPING_LIST: 
    return state //the result of this action should be an amended shop list 
    case UPDATE_ITEM_ON_SHOPPING_LIST:
    return state //the state with the information updated 
    case REMOVE_FROM_SHOPPING_LIST:
    return state //the state without the item removed 
    default: return state
  }
}