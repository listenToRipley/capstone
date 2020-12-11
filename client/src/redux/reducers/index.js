import { combineReducers } from 'redux'
import loginRed from './loginRed'
import nav from './nav' 
import userShopList from './userShopList'
import userPantry from './userPantry'
import createNewUser from './createNewUser'
import openFoodFinder from './openFoodFinder'
import findFood from './findFood'
import contentShifter from './contentShifter'
import { LOGOUT } from '../actions/types'

let reset = {
    user: {
      username:'',
      password: '',
      validation:false,
      pass: '',
      time:''
    },  
    userDetails: { 
      userLocationId:'' ,
      displayPrefId:'', 
      pantryId:'', 
      shopListId:'', 
      palListId:'', 
      accessId:'',
      run: false
    },
    newUser: false,
    userShopList: {
      call: false,
      list: []
    },
    openFoodFinder: false,
    searchResults: []

  }

const allReducers = combineReducers({
    openDrawer: contentShifter,
    user: loginRed,
    userDetails: nav,
    userShopList: userShopList,
    userPantry:userPantry,
    newUser: createNewUser,
    openFoodFinder: openFoodFinder,
    searchResults: findFood,

})

const root = (state, action) => {
    if(action.type === LOGOUT) {
        return reset
    } else {
        return allReducers(state, action)
    }
}

export default root  