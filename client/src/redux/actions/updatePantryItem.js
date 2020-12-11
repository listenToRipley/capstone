import {UPDATE_ITEM_ON_PANTRY_LIST} from './types'

export const upPantryItem = (entryId, quantity, item, spoonId) => async dispatch =>{

let path = `/postLogin/${user}/pantry/upItem/${entryId}`
let intake = pass.token

let updateThisEntry = JSON.stringify({
  "quantity": quantity, 
  "measure":null, 
  "item":item, 
  "spoon": spoonId,
  "entryId": entryId
})

try{
    let res = await fetch(path, {
      method: 'PUT',
      headers: {
        Accept: "application/json", "Content-Type": "application/json",
        token: `${intake}`,
      },
      body: updateThisEntry
    }
    )
    let getResult = await res.json()
 
    let result = {...getResult}
  
    dispatch({
      type: UPDATE_ITEM_ON_PANTRY_LIST,
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