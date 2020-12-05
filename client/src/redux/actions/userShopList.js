import {ITEMS_ON_SHOPPING_LIST} from './types'

export const shopListItems = (listId) => {
  //a full list of all items currently on the list 
  return {
    type: 'ITEMS_ON_SHOPPING_LIST',
    payload: listId
  } 
}
