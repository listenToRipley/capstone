import {YOUR_SHOPPING_LIST} from './types'

export const findShopList = (listId, pass, username) => async dispatch => {
  console.log('what is the intake ? ', 'username?',username, listId, 'and pass : ', pass)
  let path = `/postLogin/${username}/shopList/items/${listId}`

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
    console.log('let me about the result of shop list', result)
    dispatch({
      type: YOUR_SHOPPING_LIST,
      payload: {
        userShopList: {
          call: true,
          list: result
        }
      }
    })
  } catch (e) {
    console.log('error ? ', {e})
    return 'what is the error on shop list? ', {e}
  }

}