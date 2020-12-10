import {YOUR_PANTRY_LIST} from './types'

export const findPantry = (listId, pass, username) => async dispatch => {
  let path = `/postLogin/${username}/pantry/items/${listId}`
 
  try {
    let res = await fetch(path, {
      method: 'GET',
      header: {
        Accept: "application/json", "Content-Type" : "application/json",
        token: `${pass}`
      }
    })
    let getResults = await res.json()
    
    let result =[...getResults]
    dispatch({
      type: YOUR_PANTRY_LIST,
      payload: {
        userPantry: {
          call: true,
          list: result
        }
      }
    })
  } catch (e) {
    console.log('error ? ', {e})
    return 'what is the error on pantry? ', {e}
  }

}