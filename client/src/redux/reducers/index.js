import { combineReducers } from 'redux'
import loginRed from './loginRed'
import userDetails from './userDetails'
import nav from './nav' //right now should not be added to anything since it is trying to stay global to pass information to components to create calls. 
import { LOGOUT } from '../actions/types'

const allReducers = combineReducers({
    user: loginRed,
    userDetails: userDetails,
    nav: nav
})

const root = (state, action) => {
    if(action.type === LOGOUT) {
        const {user, userDetails, nav} = state
        state = {user, userDetails, nav}
    }
    return allReducers(state, action)
}

export default root  