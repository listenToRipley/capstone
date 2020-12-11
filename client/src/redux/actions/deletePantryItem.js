import {REMOVE_FROM_PANTRY_LIST} from './types'

export const removePantryItem = (user,pass, itemId) => async dispatch =>{

let path = `/postLogin/${user}/pantry/remove/${itemId}`

try{
    let res = await fetch(path, {
      method: 'PUT',
      headers: {
        Accept: "application/json", "Content-Type": "application/json",
        token: `${pass}`,
      }
    }
    )
    let getResult = await res.json()
    let result = {...getResult}

    dispatch({
      type: REMOVE_FROM_PANTRY_LIST,
        payload: itemId
    })
  } catch (e) {
    return 'what the error the remove from shop list? ', {e}
}

}