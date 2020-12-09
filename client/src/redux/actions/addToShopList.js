import {ADD_ITEM_TO_SHOPPING_LIST} from './types'

export const addItemShopList = (input) => {
  return {
    type: ADD_ITEM_TO_SHOPPING_LIST,
    payload: input //shop list  and possibly : token, quantity, measure, item, spoon
  }
}