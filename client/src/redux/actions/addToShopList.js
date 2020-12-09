import {ADD_ITEM_TO_SHOPPING_LIST} from './types'

export const addToShopList = (pass,listId, quantity, measurement, item, itemId) => async dispatch => {
  let path = `/postLogin/shopList/addToList/${listId}`
  let intake = pass.token

  console.log('the path on add item to shop?', path)

  let createEntry = JSON.stringify({
    "quantity": quantity, 
    "measure":measurement, 
    "item":item, 
    "spoon": itemId
  })

  try{
      let res = await fetch(path, {
        method: 'POST',
        headers: {
          Accept: "application/json", "Content-Type": "application/json",
          token: `${intake}`,
        },
        body: createEntry
      }
      )
      let getResult = await res.json()
      console.log('get results on add item? ', getResult)
      let result = {...getResult}
      console.log('view the results from call', result)
      dispatch({
        type: ADD_ITEM_TO_SHOPPING_LIST,
          payload: result//should return the id of the new item added 
      })
    } catch (e) {
      return 'what the error the add to shop list? ', {e}
  }

}