import {ITEMS_ON_SHOPPING_LIST} from './types'

export const getShopList = (listId) => {
  console.log('hey, you want to get the shop list', listId)
  return {
    type: ITEMS_ON_SHOPPING_LIST,
    payload: {
      userShopList: []
    }
  }
}