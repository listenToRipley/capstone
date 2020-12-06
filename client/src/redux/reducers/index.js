import { combineReducers } from 'redux'
import loginRed from './loginRed'
// import userDetails from './userDetails'
import store from '../store'
import nav from './nav' 
import userShopList from './userShopList'
import createNewUser from './createNewUser'
import { LOGOUT } from '../actions/types'

const allReducers = combineReducers({
    user: loginRed,
    // userInfo: userInfo,
    userDetails: nav,
    userShopList: userShopList,
    newUser: createNewUser
})

console.log('understand the all reducers', allReducers.userShopList)

const root = (state, action) => {
    if(action.type === LOGOUT) {
        const {user, userDetails, userShopList, newUser} = state
        state = {user, userDetails, userShopList, newUser}
    } else {
        return allReducers(state, action)
    }
}

export default root  