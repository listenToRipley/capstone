import {YOUR_PANTRY_LIST, ADD_ITEM_TO_PANTRY_LIST, REMOVE_FROM_PANTRY_LIST, UPDATE_ITEM_ON_PANTRY_LIST} from '../actions/types'
import state from '../state'

let initialState = {...state}

export default function(state = {...initialState.userPantry}, action) {
 
  switch(action.type) {
    case YOUR_PANTRY_LIST:
    return action.payload.userPantry
    case ADD_ITEM_TO_PANTRY_LIST: 
    return [...state.list, action.payload.newEntry] //the result of this action should be an amended shop list 
    case UPDATE_ITEM_ON_PANTRY_LIST:
      const updateList = state.list.filter(item => item.entry=== action.payload.updatedEntry.itemId) //remove item by index id and replace updated information 
      const newState = [...updateList, action.payload.updatedEntry]
      return newState
    case REMOVE_FROM_PANTRY_LIST:
     const amendState = state.list.filter(item => item.entryId=== action.payload)//splice the item from the list and return 
    return [...amendState]
    default: return state
  }
}