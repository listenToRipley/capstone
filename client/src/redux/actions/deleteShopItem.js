import {REMOVE_FROM_SHOPPING_LIST} from './types'

export const removeShopItem = (user,pass, itemId) => async dispatch =>{
  console.log('trying to delete : ',itemId)
let path = `/postLogin/${user}/shopList/remove/${itemId}`

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
      type: REMOVE_FROM_SHOPPING_LIST,
        payload: itemId
    })
  } catch (e) {
    return 'what the error the remove from shop list? ', {e}
}

}