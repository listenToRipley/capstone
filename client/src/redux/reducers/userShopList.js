import {YOUR_SHOPPING_LIST, ADD_ITEM_TO_SHOPPING_LIST, REMOVE_FROM_SHOPPING_LIST, UPDATE_ITEM_ON_SHOPPING_LIST} from '../actions/types'
import state from '../state'

let initialState = {...state}

export default function(state = {...initialState.userShopList}, action) {
 
  switch(action.type) {
    case YOUR_SHOPPING_LIST:
    return action.payload.userShopList
    case ADD_ITEM_TO_SHOPPING_LIST: 
    return [...state.list, action.payload.newEntry] 
    case UPDATE_ITEM_ON_SHOPPING_LIST:
       const updateList = state.list.filter(item => item.entry=== action.payload.updatedEntry.itemId) 
      const newState = [...updateList, action.payload.updatedEntry]
      return newState
    case REMOVE_FROM_SHOPPING_LIST:
     const amendState = state.list.filter(item => item.entryId=== action.payload)
    return { 
      ...state,
      useShopList:[...state.list, amendState]
    }
    default: return state
  }
}