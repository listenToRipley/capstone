import { combineReducers } from 'redux'
import loginRed from './loginRed'
import userInfo from './userInfo'

export default combineReducers({
    user: loginRed,
    userInfo: userInfo
})