import {UPDATE_ITEM_ON_SHOPPING_LIST, REMOVE_FROM_SHOPPING_LIST} from '../types'

export const upItemShopList = (entryId, quantity, measure, item, spoonId) => {
  let path =``

  return {
    type: UPDATE_ITEM_ON_SHOPPING_LIST,
    payload: input //item id, possibly: 
  }
}

export const removeItemShopList = (entryId) => {
  return {
    type: REMOVE_FROM_SHOPPING_LIST,
    payload: input //item id 
  }
}
