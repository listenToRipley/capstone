export const createUser = (user) => {
  return {
    type: 'CREATE_USER',
    value: user //should add new person to my database 
  }
}

export const logIn = (status) => {
  return {
    type: 'LOGIN',
    value: status //should be boolean
  }
}


//pal list items 
export const myPalsList = (input) => {
  return {
    type: 'MY_PALS_LIST',
    value: input 
  }
}

export const findPals = (input) => {
  return {
    type:'FIND_PALS',
    value: input //has to look through the database to determine uses 
  }
}

export const addPal = (input) => {
  return {
    type: 'ADD_PAL',
    value: input
  }
}

export const acceptPalRequest = (input) => {
  return {
    type: 'ACCEPT_PAL_REQUEST',
    value: input
  }
}

export const declinePalRequest = (input) => {
  return {
    type: 'DECLINE_PAL_REQUEST',
    value: input
  }
}

export const removePal = (input) => {
  return {
    type: 'REMOVE_PAL',
    value: input
  }
}

export const blockPal = (input) => {
  return {
    type: 'BLOCK_PAL',
    value: input
  }
}


//shopping items 
export const addToShoppingList = (input) => {
  return {
    type: 'ADD_TO_SHOPPING_LIST',
    value: input //should this be a class? 
  }
}

export const checkItemOnShoppingList = (input) => {
  return {
    type: 'CHECK_ITEM_ON_SHOPPING_LIST',
    value: input //this feels like a whole process, but a single straight forward item
  }
}

export const requestItem = (input) => {
  return {
    type: 'REQUEST_ITEM',
    value: input
  }
}

export const acceptRequestedItem = (input) => {
  return {
    type: 'ACCEPT_REQUESTED_ITEM',
    value: input
  }
}

export const declineRequestedItem = (input) => {
  return {
    type: 'DECLINE_REQUESTED_ITEM',
    value: input
  }
}

export const removeFromShoppingList = (input) => {
  return {
    type: 'REMOVE_FROM_SHOPPING_LIST',
    value: input //should this be a class? 
  }
}

export const autoAddToPantry = (input) => {
  return {
    type:'AUTO_ADD_TO_PANTRY',
    value: input
  }
}

export const requestShoppingListMerge = (input) => {
  return {
    type: 'REQUEST_SHOPPING_LIST_MERGE',
    value: input
  }
}

export const acceptShoppingListMerge = (input) => {
  return {
    type: 'ACCEPT_SHOPPING_LIST_MERGE',
    value: input
  }
}

export const declineShoppingListMerge = (input) => {
  return {
    type: 'DECLINE_SHOPPING_LIST_MERGE',
    value: input
  }
}

export const permissionsShoppingList = (input) => {
  return {
    type: 'PERMISSIONS_SHOPPING_LIST',
    value: input
  }
}


//pantry items 
export const addToPantry = (input) => {
  return {
    type: 'ADD_TO_PANTRY',
    value: input //should this be a class? 
  }
}

export const removeFromPantry = (input) => {
  return {
    type: 'REMOVE_FROM_PANTRY',
    value: input //should this be a class? 
  }
}

export const autoAddToShopping = (input) => {
  return {
    type: 'AUTO_ADD_TO_SHOPPING',
    value: input 
  }
}
export const requestPantryMerge = (input) => {
  return {
    type: 'REQUEST_PANTRY_MERGE',
    value: input
  }
}

export const acceptPantryMerge = (input) => {
  return {
    type: 'ACCEPT_PANTRY_MERGE',
    value: input
  }
}

export const declinePantryMerge = (input) => {
  return {
    type: 'DECLINE_PANTRY_MERGE',
    value: input
  }
}

export const permissionsPantry = (input) => {
  return {
    type: 'PERMISSIONS_PANTRY',
    value: input
  }
}


//food
export const fetchFood = () => {
  return (dispatch) => {
    //don't think the add of the api is quite right. 
    fetch(`https://api.spoonacular.com/food/products/search?apiKey=${SPOON_API_KEY}query=${input}`)
      .then(req => req.json())
      .then(res => {
        dispatch({ //need to pull in the information, do I need to add the key here? 
       
            type: 'FETCH_FOOD',
            value: input
          
        })
      })
  }
}