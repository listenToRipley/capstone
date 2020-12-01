import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import state from './state'
import reducer from './reducers'

const middleware = [thunk]

const store = createStore(reducer, state, composeWithDevTools(applyMiddleware(...middleware)))

export default store;