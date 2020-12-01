import {
// CREATE_NEW_USER,
// FORGOT_USERNAME,
// FORGOT_PASSWORD,
// FIND_PALS,
// ALL_USERS,
// ALL_ALLERGIES,
// ALL_DIETS,
// ADD_ALLERGIES,
// ADD_DIETS,
// UPDATE_PASSWORD,
// LOGIN, 
// USER_INFORMATION
// USER_LOCATION,
// USER_BIRTHDAY,
// VIEW_USER_DISPLAY_PREFERENCES,
// VIEW_USERS_ALLERGIES,
// VIEW_USERS_DIETS,
// VIEW_USERS_DISLIKES,
// VIEW_USERS_LIKES,
// UPDATE_USERS_BIRTHDAY,
// UPDATE_USERS_EMAIL,
// UPDATE_USERS_LOCATION_INFO,
// UPDATE_USER_PHONE_NUMBER,
// ADD_USER_ALLERGY,
// REMOVE_USER_ALLERGY,
// ADD_USER_DIET,
// REMOVE_USER_DIET,
// ADD_USER_DISLIKE,
// REMOVE_USER_DISLIKE,
// ADD_USER_LIKE,
// REMOVE_USER_LIKE,
// UPDATE_USER_DISPLAY_PREFERENCES,
// UPDATE_USER_DISPLAY_PRIVATE,
// RESET_USER_DISPLAY_PREFERENCES_TO_DEFAULT,
// MY_PAL_LIST,
// MY_PALS_LIST,
// SEND_PAL_REQ,
// VIEW_PENDING_PAL_REQUESTS,
// VIEW_SENT_PAL_REQUESTS,
// ACCEPT_PAL,
// DECLINE_PAL,
// UPDATE_PAL_LIST_NAME,
// UPDATE_PALS_ROLES_ON_LISTS,
// MY_SHOPPING_LIST,
// PALS_SHOPPING_LIST,
// SHOPPING_LIST_DETAILS,
// SHOPPING_LIST_ITEM_COUNT,
// ITEMS_ON_SHOPPING_LIST,
// ADD_ITEM_TO_SHOPPING_LIST,
// UPDATE_ITEM_ON_SHOPPING_LIST,
// REMOVE_FROM_SHOPPING_LIST,
// MARK_OFF_ITEM_ON_SHOPPING_LIST,
// REQUEST_ITEM_COUNT,
// VIEW_REQUEST_ITEMS_ON_SHOPPING_LIST,
// VIEW_SENT_ITEM_REQUESTS,
// REQUEST_AN_ITEM,
// ACCEPT_REQUESTED_ITEM,
// DECLINE_REQUESTED_ITEM,
// AUTO_ADD_TO_PANTRY,
// UPDATE_SHOPPING_LIST_NAME,
// MY_PANTRY,
// PALS_PANTRY,
// PANTRY_DETAILED_INFO,
// PANTRY_ITEM_COUNT,
// PANTRY_ITEMS_LIST,
// PANTRY_ACCESS_DETAILS,
// ADD_TO_PANTRY,
// UPDATE_PANTRY_ITEM,
// REMOVE_ITEM_FROM_PANTRY,
// AUTO_ADD_SHOP_LIST,
// UPDATE_PANTRY_NAME,
// SEND_MERGE_REQ,
// ACCEPT_MERGE_REQUEST, 
// DECLINE_MERGE_REQUEST,
// FETCH_FOOD 
} from './types'


export const createUser = (user) => {
  return (dispatch) => {
    fetch('http://localhost:4001/preLogin/createUser')
    .then(req => req.json())
    dispatch({ //need to pull in the information, do I need to add the key here? 
       
      type: 'CREATE_NEW_USER',
      payload: {
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

export const forgotUsername = (email) => {
  //for current user
  return {
    type: 'FORGOT_USERNAME',
    payload: email 
  }
}

export const forgotPassword = (email) => {
  //this updatePassword in mysql 
  return {
    type: 'FORGOT_PASSWORD',
    payload: email //the email is required, then update password 
  }
}

//app functions 
export const findUsers = (input) => {
  //searchUsers path in mysql 
  return {
    type:'FIND_PALS',
    payload: input //username or email
  }
}

export const listAllUsers = (input) => {
  return {
    type: 'ALL_USERS',
    payload: input //no input required 
  }
}

export const allAllergies = (input) => {
  //provides a list of all allergies current in the system 
  return {
    type: 'ALL_ALLERGIES',
    payload: input //no input required 
  }
}

export const allDiets = (input) => {
  //provides a list of all diets current in the system 
  return {
    type: 'ALL_DIETS',
    payload: input //no input required 
  }
}

//app ACTIONS 

export const addAllergies = (input) => {
  return {
    type: 'ADD_ALLERGIES',
    payload: input //new allergy
  }
}

export const addDiets = (input) => {
  return {
    type: 'ADD_DIETS',
    payload: input //new diet
  }
}

//this is specific to current user
export const upPassword = (input) => {
  //this will be updateFromLogPassword
  return {
    type: 'UPDATE_PASSWORD',
    payload: input //user and new password 
  }
}

//LOGIN 
// export const login = (username, password) => {
//     console.log('the username  is :', username,'the password:',password)
//   return {
//     type: LOGIN,
//     payload: {
//       user: {
//         username: username.value,
//         password: password.value,
//         validation: true,
//         token: `${username.value}+${password.value}=true~START_USING!`
//       }
//     }
//   } 
// }

//USER INFO
export const userPersonInfo = (user) => {
  return {
    type: 'USER_PERSONAL_INFORMATION',
    payload: user //user
  }
}

export const userLocation = (user) => {
  return {
    type: 'USER_LOCATION',
    payload: user //user
  }
}

export const userBirthday = (user) => {
  return {
    type: 'USER_BIRTHDAY',
    payload: user //user
  }
}

export const userDisplayInfo = (user) => {
  //provides there users display preferences as they currently stand
  return {
    type: 'VIEW_USER_DISPLAY_PREFERENCES',
    payload: user //user
  }
}

export const userAllergies = (user) => {
  return {
    type: 'VIEW_USERS_ALLERGIES',
    payload: user //user
  }
}

export const userDiets = (user) => {
  return {
    type: 'VIEW_USERS_DIETS',
    payload: user//user
  }
}

export const userDislike = (user) => {
  return {
    type: 'VIEW_USERS_DISLIKES',
    payload: user //user
  }
}

export const userLike = (user) => {
  return {
    type: 'VIEW_USERS_LIKES',
    payload: user //user
  }
}
//user actions 

export const upBirthday = (user) => {
  return {
    type: 'UPDATE_USERS_BIRTHDAY',
    payload: input //user, possibly: year, date, month 
  }
}

export const upEmail = (input) => {
  return {
    type: 'UPDATE_USERS_EMAIL',
    payload: input // user, email
  }
}

export const upLocation = (input) => {
  return {
    type: 'UPDATE_USERS_LOCATION_INFO',
    payload: input //user, address, city, state, zip, country
  }
}

export const upPhone = (input) => {
  return {
    type: 'UPDATE_USER_PHONE_NUMBER',
    payload: input //user, phone, must be 10 digits 
  }
}

export const addUserAllergy = (input) => {
  return {
    type: 'ADD_USER_ALLERGY',
    payload: input //user, allergy id 
  }
}

export const removeUserAllergy = (input) => {
  return {
    type: 'REMOVE_USER_ALLERGY',
    payload: input //user, entry id 
  }
}


export const addUserDiet = (input) => {
  return {
    type: 'ADD_USER_DIET',
    payload: input //user, diet id 
  }
}

export const removeUserDiet = (input) => {
  return {
    type: 'REMOVE_USER_DIET',
    payload: input //user, entry id
  }
}

export const addUserDislike = (input) => {
  return {
    type: 'ADD_USER_DISLIKE',
    payload: input //user, item, spoon
  }
}

export const removeUserDislike = (input) => {
  return {
    type: 'REMOVE_USER_DISLIKE',
    payload: input //user, entry id 
  }
}

export const addUserLike = (input) => {
  return {
    type: 'ADD_USER_LIKE',
    payload: input //user, item, spoon
  }
}

export const removeUserLike = (input) => {
  return {
    type: 'REMOVE_USER_LIKE',
    payload: input //user, entry id 
  }
}

  //display 
export const upDisplayPref = (input) => {
  return {
    type: 'UPDATE_USER_DISPLAY_PREFERENCES',
    payload: input//user, possibly booleans for the following: likes, dislikes, diets, allergies, city, state, country, email, dobMonth, dobDate, dobYear, phone
  }
}

export const upDisplayPrivate = (input) => {
  return {
    type: 'UPDATE_USER_DISPLAY_PRIVATE',
    payload: input //user and boolean 
  }
}

export const upDisplayPrefDefault = (input) => {
  return {
    type: 'RESET_USER_DISPLAY_PREFERENCES_TO_DEFAULT',
    payload: input //user
  }
}

//PAL LIST 

export const myPalList = (input) => {
  return {
    type: 'MY_PAL_LIST',
    payload: input //username
  }
}

export const palsPalList = (input) => {
  return {
    type: 'MY_PALS_LIST',
    payload: input //pal's username
  }
}


//pal list - ACTIONS 
export const sendPalReq = (input) => {
  return {
    type: 'SEND_PAL_REQ',
    payload: input //username of pal
  }
}

export const viewPendingPals = (input) => {
  return {
    type: 'VIEW_PENDING_PAL_REQUESTS',
    payload: input //user
  }
}

export const viewSentReqPal = (input) => {
  return {
    type: 'VIEW_SENT_PAL_REQUESTS',
    payload: input//user
  }
}

export const acceptPal = (input) => {
  return {
    type: 'ACCEPT_PAL',
    payload: input // req id 
  }
}

export const declinePal = (input) => {
  return {
    type: 'DECLINE_PAL',
    payload: input //req id
  }
}

//pal list - SETTINGS
export const upPalListName = (input) => {
  return {
    type: 'UPDATE_PAL_LIST_NAME',
    payload: input //user, new title 
  }
  
}

export const upPalRole = (input) => {
  return {
    type: 'UPDATE_PALS_ROLES_ON_LISTS',
    payload: input //pal's username 
  }
}

//SHOPPING LIST 
export const myShopList = (input) => {
  return {
    type: 'MY_SHOPPING_LIST',
    payload: input //user
  }
}

export const palsShopList = (input) => {
  return {
    type: 'PALS_SHOPPING_LIST',
    payload: input //pal's username 
  }
}

export const shopListDetails = (input) => {
  //provides the shop list id, owner, name and access, settings and merge status
  return {
    type: 'SHOPPING_LIST_DETAILS',
    payload: input //shop list id 
  }
}

export const shopListCount = (input) => {
  //provide as a count of how many items on currently on the shopping list 
  return {
    type: 'SHOPPING_LIST_ITEM_COUNT',
    payload: input // shop list id 
  }
}

export const shopListItems = (input) => {
  //a full list of all items currently on the list 
  return {
    type: 'ITEMS_ON_SHOPPING_LIST',
    payload: input //shop list id 
  }
} 

//shop list - ACTIONS 
export const addItemShopList = (input) => {
  return {
    type: 'ADD_ITEM_TO_SHOPPING_LIST',
    payload: input //shop list  and possibly : quantity, measure, item, spoon
  }
}

export const upItemShopList = (input) => {
  return {
    type: 'UPDATE_ITEM_ON_SHOPPING_LIST',
    payload: input //item id, possibly: quantity, measure, item, spoonId
  }
}

export const removeItemShopList = (input) => {
  return {
    type: 'REMOVE_FROM_SHOPPING_LIST',
    payload: input //item id 
  }
}

export const markOffItem = (input) => {
  return {
    type: 'MARK_OFF_ITEM_ON_SHOPPING_LIST',
    payload: input //this feels like a whole process, but a single straight forward item
  }
}

//shop list - REQUESTS 
export const reqCount = (input) => {
  //know how many requests on your list currently have pending 
  return {
    type: 'REQUEST_ITEM_COUNT',
    payload: input // shop list id 
  }
}

export const viewShopReq = (input) => {
  //provides a list of all items that have pending your approval 
  return {
    type: 'VIEW_REQUEST_ITEMS_ON_SHOPPING_LIST',
    payload: input //shop list id 
  }
}

export const viewSentReq = (input) => {
  //provide a list of all items the current user has sent to other lists
  return {
    type: 'VIEW_SENT_ITEM_REQUESTS',
    payload: input//user and list id 
  }
}

// ~~ ACTIONS 
export const sendReqItem = (input) => {
  //can only be done is the current user is list a requesters 
  return {
    type: 'REQUEST_AN_ITEM',
    payload: input //user, list id possibly: quantity, measId, item, spoonId
  }
}

export const acceptReqItem = (input) => {
  //action can only be taken if you are the owner or co-owner currently listed 
  return {
    type: 'ACCEPT_REQUESTED_ITEM',
    payload: input //req id 
  }
}

export const declineReqItem = (input) => {
    //action can only be taken if you are the owner or co-owner currently listed 
  return {
    type: 'DECLINE_REQUESTED_ITEM',
    payload: input //req id 
  }
}

//shop list  - SETTINGS
export const autoAddToPantry = (input) => {
  return {
    type:'AUTO_ADD_TO_PANTRY',
    payload: input
  }
}

export const upShopListName = (input) => {
  return {
    type: 'UPDATE_SHOPPING_LIST_NAME',
    payload: input
  }
}


//PANTRY
export const myPantry = (input) => {
  return {
    type: 'MY_PANTRY',
    payload: input
  }
}

export const palsPantry = (input) => {
  return {
    type: 'PALS_PANTRY',
    payload: input
  }
}

export const pantryDetails = (input) => {
  //tells who is the pantry owner, the name on the pantry, the auto add setting and merge status on pantry 
  return {
    type:'PANTRY_DETAILED_INFO',
    payload: input //pantry Id
  }
}

export const pantryCount = (input) => {
  //provides a count of how many items are currently on in the pantry
  return {
    type: 'PANTRY_ITEM_COUNT',
    payload: input //pantry ID
  }
}

export const pantryItems = (input) => {
  //a full list of all items in the pantry 
  return {
    type: 'PANTRY_ITEMS_LIST',
    payload: input //pantry id
  }
}

export const pantryAccess = (input) => {
  //who has access to the pantry currently 
  return {
    type: 'PANTRY_ACCESS_DETAILS',
    payload: input //pantry id 
  }
}

export const addToPantry = (input) => {
  return {
    type: 'ADD_TO_PANTRY',
    payload: input //pantry Id, quantity, measId, item, spoonId
  }
}

export const upPantryItem = (input) => {
  //allows for a specific item to be updated 
  return {
    type: 'UPDATE_PANTRY_ITEM',
    payload: input //item id, possibly: quantity, measId, item, spoonId
  }
}

export const removeItemPantry = (entry) => {
  return {
    type: 'REMOVE_ITEM_FROM_PANTRY',
    payload: input //item id
  }
}

//PANTRY SETTING
export const autoAddShopList = (pantryId, boo) => {
  return {
    type: 'AUTO_ADD_SHOP_LIST',
    payload: {
      pantryId,
      boo
    }
  }
  
}

export const upPantryName = (input) => {
  return {
    type: 'UPDATE_PANTRY_NAME',
    payload: input
  }
}

//MERGE
export const sendMergeReq = (input) => {
  return {
    type: 'SEND_MERGE_REQ',
    payload: input
  }
}

export const acceptMerge = (mergeId) => {
  return {
    type: 'ACCEPT_MERGE_REQUEST',
    payload: mergeId
  }
}

export const declineMerge = (mergeId) => {
  return {
    type: 'DECLINE_MERGE_REQUEST',
    payload: mergeId
  }
}



//food
export const findFood = (searchItem) => {
  return (dispatch) => {
    //don't think the add of the api is quite right. 
    fetch(`https://api.spoonacular.com/food/products/search?apiKey=${SPOON_API_KEY}query=${searchItem}`)
      .then(req => req.json())
      .then(res => {
        dispatch({ //need to pull in the information, do I need to add the key here? 
       
            type: 'FETCH_FOOD',
            payload: res.Results
          
        })
      })
  }
}

//FUTURE STATE 
// export const removePal = (input) => {
//   return {
//     type: 'REMOVE_PAL',
//     payload: input
//   }
// }

// export const blockPal = (input) => {
//   return {
//     type: 'BLOCK_PAL',
//     payload: input
//   }
// }

export default logIn