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

export const forgotUsername = (input) => {
  //for current user
  return {
    type: 'FORGOT_USERNAME',
    value: input //email
  }
}

export const forgotPassword = (input) => {
  //this updatePassword in mysql 
  return {
    type: 'FORGOT_PASSWORD',
    value: input //the email is required, then update password 
  }
}

//app functions 
export const findUsers = (input) => {
  return {
    type:'FIND_PALS',
    value: input //username or email
  }
}

export const upPassword = (input) => {
  //this will be updateFromLogPassword
  return {
    type: 'UPDATE_PASSWORD',
    value: input //user and new password 
  }
}

//LOGIN 
export const logIn = (user) => {
  return {
    type: 'LOGIN',
    value: user 
    //return a token 
  }
}

//PAL LIST 

export const myPalList = (input) => {
  return {
    type: 'MY_PAL_LIST',
    value: input //username
  }
}

export const palsPalList = (input) => {
  return {
    type: 'MY_PALS_LIST',
    value: input //pal's username
  }
}


//pal list - ACTIONS 
export const sendPalReq = (input) => {
  return {
    type: 'SEND_PAL_REQ',
    value: input //username of pal
  }
}

export const viewPendingPals = (input) => {
  return {
    type: 'VIEW_PENDING_PAL_REQUESTS',
    value: input //user
  }
}

export const viewSentReq = (input) => {
  return {
    type: 'VIEW_SENT_PAL_REQUESTS',
    value: input//user
  }
}

export const acceptPal = (input) => {
  return {
    type: 'ACCEPT_PAL',
    value: input // req id 
  }
}

export const declinePal = (input) => {
  return {
    type: 'DECLINE_PAL',
    value: input //req id
  }
}

//pal list - SETTINGS
export const upPalListName = (input) => {
  return {
    type: 'UPDATE_PAL_LIST_NAME',
    value: input //user, new title 
  }
  
}

export const upPalRole = (input) => {
  return {
    type: 'UPDATE_PALS_ROLES_ON_LISTS',
    value: input //pal's username 
  }
}

//SHOPPING LIST 
export const myShopList = (input) => {
  return {
    type: 'MY_SHOPPING_LIST',
    value: input //user
  }
}

export const palsShopList = (input) => {
  return {
    type: 'PALS_SHOPPING_LIST',
    value: input //pal's username 
  }
}

export const shopListDetails = (input) => {
  //provides the shop list id, owner, name and access, settings and merge status
  return {
    type: 'SHOPPING_LIST_DETAILS',
    value: input //shop list id 
  }
}

export const shopListCount = (input) => {
  //provide as a count of how many items on currently on the shopping list 
  return {
    type: 'SHOPPING_LIST_ITEM_COUNT',
    value: input // shop list id 
  }
}

export const shopListItems = (input) => {
  //a full list of all items currently on the list 
  return {
    type: 'ITEMS_ON_SHOPPING_LIST',
    value: input //shop list id 
  }
} 

//shop list - ACTIONS 
export const addItemShopList = (input) => {
  return {
    type: 'ADD_ITEM_TO_SHOPPING_LIST',
    value: input //shop list  and possibly : quantity, measure, item, spoon
  }
}

export const upItemShopList = (input) => {
  return {
    type: 'UPDATE_ITEM_ON_SHOPPING_LIST',
    value: input //item id, possibly: quantity, measure, item, spoonId
  }
}

export const removeItemShopList = (input) => {
  return {
    type: 'REMOVE_FROM_SHOPPING_LIST',
    value: input //item id 
  }
}

export const markOffItem = (input) => {
  return {
    type: 'MARK_OFF_ITEM_ON_SHOPPING_LIST',
    value: input //this feels like a whole process, but a single straight forward item
  }
}

//shop list - REQUESTS 
export const reqCount = (input) => {
  //know how many requests on your list currently have pending 
  return {
    type: 'REQUEST_ITEM_COUNT',
    value: input // shop list id 
  }
}

export const viewShopReq = (input) => {
  //provides a list of all items that have pending your approval 
  return {
    type: 'VIEW_REQUEST_ITEMS_ON_SHOPPING_LIST',
    value: input //shop list id 
  }
}

export const viewSentReq = (input) => {
  //provide a list of all items the current user has sent to other lists
  return {
    type: 'VIEW_SENT_ITEM_REQUESTS',
    value: input//user and list id 
  }
}

// ~~ ACTIONS 
export const sendReqItem = (input) => {
  //can only be done is the current user is list a requesters 
  return {
    type: 'REQUEST_AN_ITEM',
    value: input //user, list id possibly: quantity, measId, item, spoonId
  }
}

export const acceptReqItem = (input) => {
  //action can only be taken if you are the owner or co-owner currently listed 
  return {
    type: 'ACCEPT_REQUESTED_ITEM',
    value: input //req id 
  }
}

export const declineReqItem = (input) => {
    //action can only be taken if you are the owner or co-owner currently listed 
  return {
    type: 'DECLINE_REQUESTED_ITEM',
    value: input //req id 
  }
}

//shop list  - SETTINGS
export const autoAddToPantry = (input) => {
  return {
    type:'AUTO_ADD_TO_PANTRY',
    value: input
  }
}

export const upShopListName = (input) => {
  return {
    type: 'UPDATE_SHOPPING_LIST_NAME',
    value: input
  }
}


//PANTRY
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