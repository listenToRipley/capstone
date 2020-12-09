import {UPDATE_ITEM_ON_SHOPPING_LIST} from './types'

export const upItemShopList = (entryId, quantity, measure, item, spoonId) => {
  let path =``

  return {
    type: UPDATE_ITEM_ON_SHOPPING_LIST,
    payload: {
      updatedEntry: {
        "quantity": quantity, 
        "measure":null, 
        "item":item, 
        "spoon": itemId,
        "entryId": entryId
      }
    }
  }
}
