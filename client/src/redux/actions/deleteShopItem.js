import {REMOVE_FROM_SHOPPING_LIST} from './types'

export const removeShopItem = (user,pass, itemId) => async dispatch =>{

let path = `/postLogin/${user}/shopList/remove/${itemId}`

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
      type: REMOVE_FROM_SHOPPING_LIST,
        payload: itemId
    })
  } catch (e) {
    return 'what the error the remove from shop list? ', {e}
}

}