import {ADD_ITEM_TO_SHOPPING_LIST} from './types'

export const addToShopList = (user,pass,listId, quantity, measurement, item, itemId) => async dispatch => {
  let path = `/postLogin/${user}/shopList/addToList/${listId}`
  let intake = pass.token

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
      let result = {...getResult}
      console.log('view the results from call', result)
      dispatch({
        type: ADD_ITEM_TO_SHOPPING_LIST,
          payload: result
      })
    } catch (e) {
      return 'what the error the user details? ', {e}
  }

}