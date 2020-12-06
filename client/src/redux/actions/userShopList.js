import {YOUR_SHOPPING_LIST} from './types'

console.log('make sure the shop list is here', YOUR_SHOPPING_LIST)

export const findShopList = (listId) => {
  console.log('hey, you want to get the shop list', listId)
  //need to make sure the item id is getting passed too! 
  return {
    type: YOUR_SHOPPING_LIST,
    payload: {
      userShopList: [true]
    }
  }
}