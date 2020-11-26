export const createUser = (user) => {
  return (dispatch) => {
    fetch('http://localhost:4001/preLogin/createUser')
    .then(req => req.json())
    dispatch({ //need to pull in the information, do I need to add the key here? 
       
      type: 'CREATE USER',
      value: {
        'username': '',
        'password': '',
        'email':'',
        'firstName':'',
        'lastName':'',
        'dobMonth':'', 
        'dobDate':'', 
        'dobYear':''
      }
    
  })
  }
}

export const findUsername = (input) => {
  return {
    type: 'FIND_USERNAME',
    value: input //email
  }
}

//app functions 
export const findUsers = (input) => {
  return {
    type:'FIND_PALS',
    value: input //username or email
  }
}

//add function 
export const logIn = (user) => {
  return {
    type: 'LOGIN',
    value: user 
    //return a token 
  }
}

//pal list items 
export const myPalList = (input) => {
  return {
    type: 'MY_PAL_LIST',
    value: input //username
  }
}

export const sendPalReq = (input) => {
  return {
    type: 'SEND_PAL_REQ',
    value: input //username of pal
  }
}

export const viewPendingPals = (input) => {
  return {
    type: 'VIEW_PENDING_PAL_REQUESTS',
    value: input //username
  }
}

export const viewSentReq = (input) => {
  return {
    type: 'VIEW_SENT_PAL_REQUESTS',
    value: input//username
  }
}

export const acceptPal = (input) => {
  return {
    type: 'ACCEPT_PAL',
    value: input
  }
}

export const declinePal = (input) => {
  return {
    type: 'DECLINE_PAL',
    value: input
  }
}

export const palsPalList = (input) => {
  return {
    type: 'MY_PALS_LIST',
    value: input //pal's username
  }
}

//PAL LIST SETTINGS
export const upPalListName = (input) => {
  return {
    type: 'UPDATE_PAL_LIST_NAME',
    value: input //new name
  }
  
}

export const updatePalRole = (input) => {
  return {
    type: 'UPDATE_PALS_ROLES_ON_LISTS',
    value: input //username 
  }
}

//shopping items 
export const myShopList = (input) => {
  return {
    type: 'MY_SHOPPING_LIST',
    value: input
  }
}

export const upShopListName = (input) => {
  return {
    type: 'UPDATE_SHOPPING_LIST_NAME',
    value: input
  }
}

export const palsShopList = (input) => {
  return {
    type: 'PALS_SHOPPING_LIST',
    value: input
  }
}

export const removeItemToShoppingList = (input) => {
  return {
    type: 'REMOVE_FROM_SHOPPING_LIST',
    value: input //should this be a class? 
  }
}

export const upItemOnShoppingList = (input) => {
  return {
    type: 'UPDATE_ITEM_ON_SHOPPING_LIST',
    value: input //should this be a class? 
  }
}

export const checkItemOnShoppingList = (input) => {
  return {
    type: 'CHECK_ITEM_ON_SHOPPING_LIST',
    value: input //this feels like a whole process, but a single straight forward item
  }
}

export const reqItem = (input) => {
  return {
    type: 'REQUEST_ITEM',
    value: input
  }
}

export const acceptReqItem = (input) => {
  return {
    type: 'ACCEPT_REQUESTED_ITEM',
    value: input
  }
}

export const declineReqItem = (input) => {
  return {
    type: 'DECLINE_REQUESTED_ITEM',
    value: input
  }
}

export const removeItemShopList = (input) => {
  return {
    type: 'REMOVE_ITEM_FROM_SHOPPING_LIST',
    value: input //should this be a class? 
  }
}

export const autoAddToPantry = (input) => {
  return {
    type:'AUTO_ADD_TO_PANTRY',
    value: input
  }
}


//pantry items
export const myPantry = (input) => {
  return {
    type: 'MY_SHOPPING_LIST',
    value: input
  }
}

export const palsPantry = (input) => {
  return {
    type: 'PALS_SHOPPING_LIST',
    value: input
  }
}

export const pantryDetails = (input) => {
  //tells who is the pantry owner, the name on the pantry, the auto add setting and merge status on pantry 
  return {
    type:'PANTRY_DETAILED_INFO',
    value: input //pantry Id
  }
}

export const pantryCount = (input) => {
  //provides a count of how many items are currently on in the pantry
  return {
    type: 'PANTRY_ITEM_COUNT',
    value: input //pantry ID
  }
}

export const pantryItems = (input) => {
  //a full list of all items in the pantry 
  return {
    type: 'PANTRY_ITEMS_LIST',
    value: input //pantry id
  }
}

export const pantryAccess = (input) => {
  //who has access to the pantry currently 
  return {
    type: 'PANTRY_ACCESS_DETAILS',
    value: input //pantry id 
  }
}

export const addToPantry = (input) => {
  return {
    type: 'ADD_TO_PANTRY',
    value: input //pantry Id, quantity, measId, item, spoonId
  }
}

export const upPantryItem = (input) => {
  //allows for a specific item to be updated 
  return {
    type: 'UPDATE_PANTRY_ITEM',
    value: input //item id, possibly: quantity, measId, item, spoonId
  }
}

export const removeItemPantry = (input) => {
  return {
    type: 'REMOVE_ITEM_FROM_PANTRY',
    value: input //item id
  }
}

//PANTRY SETTING
export const autoAddToShopList = (input) => {
  return {
    type: 'AUTO_ADD_TO_SHOP_LIST',
    value: input //item id
  }
  
}

export const upPantryName = (input) => {
  return {
    type: 'UPDATE_PANTRY_NAME',
    value: input
  }
}

//MERGE
export const sendMergeReq = (input) => {
  return {
    type: 'SEND_MERGE_REQ',
    value: input
  }
}

export const acceptMerge = (input) => {
  return {
    type: 'ACCEPT_MERGE_REQUEST',
    value: input
  }
}

export const declineMerge = (input) => {
  return {
    type: 'DECLINE_MERGE_REQUEST',
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

//FUTURE STATE 
// export const removePal = (input) => {
//   return {
//     type: 'REMOVE_PAL',
//     value: input
//   }
// }

// export const blockPal = (input) => {
//   return {
//     type: 'BLOCK_PAL',
//     value: input
//   }
// }