import {REMOVE_FROM_PANTRY_LIST} from './types'

export const removePantryItem = (user,pass, itemId) => async dispatch =>{

let path = `/postLogin/${user}/pantry/remove/${itemId}`

console.log('the path on add item to shop?', path)

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
    console.log('get results on add item? ', getResult)
    let result = {...getResult}
    console.log('view the results from call', result)
    dispatch({
      type: REMOVE_FROM_PANTRY_LIST,
        payload: itemId
    })
  } catch (e) {
    return 'what the error the remove from shop list? ', {e}
}

}