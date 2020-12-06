import {YOUR_SHOPPING_LIST} from './types'

export const findShopList = (listId, pass) => async dispatch => {
  console.log('what is the intake ? ', listId, 'and pass : ', pass)
  let path = `/postLogin/shopList/items/${listId}`

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
    console.log('let me about the result of shop list', results)
    dispatch({
      type: YOUR_SHOPPING_LIST,
      payload: {
        userShopList: {
          call: true,
          list: [result]
        }
      }
    })
  } catch (e) {
    return 'what is the error on shop list? ', {e}
  }

}