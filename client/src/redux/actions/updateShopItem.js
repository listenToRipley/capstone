import {UPDATE_ITEM_ON_SHOPPING_LIST} from './types'

export const upShopItem = (user, pass, itemId, quantity, item) => async dispatch =>{

let path = `/postLogin/${user}/shopList/upItem/${itemId}`

console.log('the path on add item to shop?', path)

let updateThisEntry = JSON.stringify({
  "quantity": quantity, 
  "measure":null, 
  "item":item
})

try{
    let res = await fetch(path, {
      method: 'PUT',
      headers: {
        Accept: "application/json", "Content-Type": "application/json",
        token: `${pass}`,
      },
      body: updateThisEntry
    }
    )
    let getResult = await res.json()
    console.log('get results on add item? ', getResult)
    let result = {...getResult}
    console.log('view the results from call', result)
    dispatch({
      type: UPDATE_ITEM_ON_SHOPPING_LIST,
        payload: {
          updatedEntry: {
            
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