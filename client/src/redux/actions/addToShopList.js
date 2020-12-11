import {ADD_ITEM_TO_SHOPPING_LIST} from './types'

export const addToShopList = (user,pass,listId, quantity, item, itemId) => async dispatch => {

  let path = `/postLogin/${user}/shopList/addToList/${listId}`
  let intake = pass.token

  let createEntry = JSON.stringify({
    "quantity": quantity, 
    "measure":null, 
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
   
      dispatch({
        type: ADD_ITEM_TO_SHOPPING_LIST,
          payload: {
            newEntry: {
              
              "quantity": quantity, 
              "measure":null, 
              "item":item, 
              "spoon": itemId,
              "itemId": result
              
            }
          }
      })
    } catch (e) {
      return 'what the error the add to shop list? ', {e}
  }

}