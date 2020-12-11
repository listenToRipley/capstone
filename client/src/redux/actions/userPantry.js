import {YOUR_PANTRY_LIST} from './types'

export const findPantry = (listId, pass, user) => async dispatch => {
  let path = `/postLogin/${user}/pantry/items/${listId}`
  console.log('path', path, ' and token', pass)
 
  try {
    let res = await fetch(path, {
      method: 'GET',
      header: {
        Accept: "application/json", "Content-Type" : "application/json",
        token: `${pass}`
      }
    })
    let getResults = await res.json()

    dispatch({
      type: YOUR_PANTRY_LIST,
      payload: {
        userPantry: {
          call: true,
          list: getResults
        }
      }
    })
  } catch (e) {
    console.log('error ? ', {e})
    return 'what is the error on pantry? ', {e}
  }

}