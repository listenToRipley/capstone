import { combineReducers } from 'redux'
import loginRed from './loginRed'
import state from '../state'
import store from '../store'
import nav from './nav' 
import userShopList from './userShopList'
import createNewUser from './createNewUser'
import setFoodFinder from './openFoodFinder'
import findFood from './findFood'
import resetSearch from './resetSearch'
import { LOGOUT } from '../actions/types'

const allReducers = combineReducers({
    user: loginRed,
    userDetails: nav,
    userShopList: userShopList,
    newUser: createNewUser,
    openFoodFinder: setFoodFinder || resetSearch,
    searchResults: findFood || resetSearch
})

const root = (state, action) => {
    if(action.type === LOGOUT) {
        return state
    } else {
        return allReducers(state, action)
    }
}

export default root  