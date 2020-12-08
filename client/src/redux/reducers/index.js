import { combineReducers } from 'redux'
import loginRed from './loginRed'
import state from '../state'
import store from '../store'
import nav from './nav' 
import userShopList from './userShopList'
import createNewUser from './createNewUser'
import openFoodFinder from './openFoodFinder'
import findFood from './findFood'
import resetSearch from './resetSearch'
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
    user: loginRed,
    userDetails: nav,
    userShopList: userShopList,
    newUser: createNewUser,
    openFoodFinder: openFoodFinder,
    searchResults: findFood,
    resetSearch: resetSearch
})

const root = (state, action) => {
    if(action.type === LOGOUT) {
        return reset
    } else {
        return allReducers(state, action)
    }
}

export default root  