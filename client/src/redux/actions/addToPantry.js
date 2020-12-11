import {ADD_ITEM_TO_PANTRY_LIST} from './types'

export const addToPantry = (user,pass,listId, quantity, item, itemId) => async dispatch => {

  let path = `/postLogin/${user}/pantry/addToList/${listId}`
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
      console.log('get results on add item? ', getResult)
      let result = {...getResult}
      console.log('view the results from call', result)
      dispatch({
        type: ADD_ITEM_TO_PANTRY_LIST,
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