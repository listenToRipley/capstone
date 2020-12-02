import { combineReducers } from 'redux'
import loginRed from './loginRed'
import userInfo from './userInfo'
import nav from './nav' //right now should not be added to anything since it is trying to stay global to pass information to components to create calls. 

export default combineReducers({
    user: loginRed,
    userInfo: userInfo,
})