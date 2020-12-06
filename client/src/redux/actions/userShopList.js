import {YOUR_SHOPPING_LIST} from './types'

console.log('make sure the shop list is here', YOUR_SHOPPING_LIST)

export const findShopList = (listId)  => {
  console.log('what is the intake ? ', listId)
  return {
    type: YOUR_SHOPPING_LIST,
    payload: {
      userShopList: [listId]
    }
  }

}