import {REMOVE_FROM_SHOPPING_LIST} from './types'

export const removeItemShopList = (entryId) => {
  return {
    type: REMOVE_FROM_SHOPPING_LIST,
    payload: input //item id 
  }
}
