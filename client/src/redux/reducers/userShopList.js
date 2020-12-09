import {YOUR_SHOPPING_LIST, ADD_ITEM_TO_SHOPPING_LIST, REMOVE_FROM_SHOPPING_LIST, UPDATE_ITEM_ON_SHOPPING_LIST} from '../actions/types'
import state from '../state'

let initialState = {...state}

export default function(state = {...initialState.userShopList}, action) {
 
  switch(action.type) {
    case YOUR_SHOPPING_LIST:
    return action.payload.userShopList
    case ADD_ITEM_TO_SHOPPING_LIST: 
    return [...state, action.payload.newEntry] //the result of this action should be an amended shop list 
    case UPDATE_ITEM_ON_SHOPPING_LIST:
      const newState = state.filter(item => item.entry=== action.payload.updatedEntry.itemId) //remove item by index id and replace updated information 
    return newState.push(action.payload.updatedEntry)
    case REMOVE_FROM_SHOPPING_LIST:
      const amendState = state.filter(item => item.entryId=== action.payload)//splice the item from the list and return 
    return amendState
    default: return state
  }
}