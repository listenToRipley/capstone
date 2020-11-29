import {combineReducers} from 'redux';
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
  LOGIN, 
  // USER_PERSONAL_INFORMATION,
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
} from '../actions/types'

const startState = {}

//add content for each action 
// const createUser = (state = [], action) => {
//   switch(action.type) {
//     case CREATE_NEW_USER: {
//       return state
//     }
//   }
// }

// const appForgot = (state = [], action) => {
//   switch(action.type) {
//     case FORGOT_USERNAME: {
//       return action.payload
//     }
//     case FORGOT_PASSWORD: {
//       return action.payload
//   }
// }

// const findUsers = (state = [], action) => {
//   switch(action.type) {
//     case FIND_PALS: {
//       return action.payload
//     }
//     case ALL_USERS: {
//       return action.payload
//     }
//   }
// }

// const allergy = (state = [], action) => {
//   switch(action.type) {
//     case ALL_ALLERGIES: {
//       return action.payload
//     }
//     case ADD_ALLERGIES: {
//       return action.payload
//     }
//   }
// }

// const diets = (state = [], action) => {
//   switch(action.type) {
//     case ALL_ALLERGIES: {
//       return action.payload
//     }
//     case ADD_DIETS: {
//       return action.payload
//     }
//   }
// }


const logIn = (state = [], action) => {
  switch(action.type) {
    case LOGIN:
      return action.payload
    default: 
      return state
  }  
}

// const userInfo = (state = [], action) => {
//   switch(action.type) {
//     case UPDATE_PASSWORD:
//       return action.payload
//     case USER_PERSONAL_INFORMATION: 
//       return action.payload
//     case USER_LOCATION:
//       return action.payload
//     case USER_BIRTHDAY:
//       return action.payload
//     case VIEW_USER_DISPLAY_PREFERENCES: 
//       return action.payload
//     case VIEW_USERS_ALLERGIES:
//       return action.payload
//     case VIEW_USERS_DIETS:
//         return action.payload
//     case VIEW_USERS_DISLIKES:
//           return action.payload
//     case VIEW_USERS_LIKES:
//             return action.payload
//   } 
// }


// const findFood = (state =[], action) => {
//   switch(action.type) {
//     case FETCH_FOOD:
//       return action.payload 
//     default:
//       return state
//        // should return the search items 
//   } // this is only function of this, it will be used in a number of other locations. 
// }

// const myPantry = (state=[], action) => {
//   switch(action.type) {
//     default: 
//     return state
//   }
// }

// const myShopList = (state=[], action) => {

// }

// const myPalList = () => {

// }

// const merge = () => {

// }


// const palsPantry = (state=[], action) => {
//   switch(action.type) {
//     default: 
//     return state
//   }
// }

// const palShopList = (state=[], action) => {

// }

// const palsPalList = () => {

// }


export default combineReducers({
  //import action options 
  // createUser,
  logIn,
  // userInfo,
  // findFood,
  // myPantry,
  // myShopList,
  // myPalList,
  // merge,
  // palsPantry,
  // palShopList,
  // palsPalList
})