import {REMOVE_FROM_SHOPPING_LIST} from './types'

export const removeShopItem = (entryId) => async dispatch =>{

let path = `/postLogin/${user}/shopList/remove/${entryId}`
let intake = pass.token

console.log('the path on add item to shop?', path)

try{
    let res = await fetch(path, {
      method: 'PUT',
      headers: {
        Accept: "application/json", "Content-Type": "application/json",
        token: `${intake}`,
      }
    }
    )
    let getResult = await res.json()
    console.log('get results on add item? ', getResult)
    let result = {...getResult}
    console.log('view the results from call', result)
    dispatch({
      type: REMOVE_FROM_SHOPPING_LIST,
        payload: entryId
    })
  } catch (e) {
    return 'what the error the remove from shop list? ', {e}
}

}