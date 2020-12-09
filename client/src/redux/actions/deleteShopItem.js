import {REMOVE_FROM_SHOPPING_LIST} from './types'

export const removeItemShopList = (entryId) => {
  
  const path = ``


  return {
    type: REMOVE_FROM_SHOPPING_LIST,
    payload: entryId
  }
}
