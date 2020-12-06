import {ITEMS_ON_SHOPPING_LIST} from './types'

export const findShopList = (listId) => {
  console.log('hey, you want to get the shop list', listId)
  //need to make sure the item id is getting passed too! 
  return {
    type: ITEMS_ON_SHOPPING_LIST,
    payload: {
      userShopList: []
    }
  }
}