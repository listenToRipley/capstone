import {YOUR_SHOPPING_LIST} from './types'

console.log('make sure the shop list is here', YOUR_SHOPPING_LIST)

export const findShopList = (listId) => dispatch => {
  console.log('what is the intake ? ', listId)
  return {
    type: YOUR_SHOPPING_LIST,
    payload: {
      userShopList: {
        call: true,
        list: [
          [ 305, 'Cupcake', 3.7],
          [ 452, 'Donut', 3.7],
          [ 305, 'Eclair', 3.7], 
          [ 5221, 'Frozen yoghurt', 159],  
          [ 5, 'Gingerbread', 356],  
          [ 1, 'Honeycomb', 408], 
          [ 32, 'Ice cream sandwich', 237], 
          [ 66, 'Jelly Bean', 375], 
          [ 23, 'KitKat', 518],  
          [ 6565, 'Lollipop', 392],
          [ 13.2, 'Marshmallow', 318],
          [ 33, 'Nougat', 360],
          [ 6666, 'Oreo', 437]
        ]
      }
    }
  }

}