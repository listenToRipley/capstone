import { combineReducers } from 'redux'
import loginRed from './loginRed'
// import userDetails from './userDetails'
import store from '../store'
import nav from './nav' //right now should not be added to anything since it is trying to stay global to pass information to components to create calls. 
import { LOGOUT } from '../actions/types'

const allReducers = combineReducers({
    user: loginRed,
    // userInfo: userInfo,
    userDetails: nav
})

const root = (state, action) => {
    if(action.type === LOGOUT) {
        const {user, userDetails} = state
        state = {user, userDetails}
    } else {
        return allReducers(state, action)
    }
}

export default root  