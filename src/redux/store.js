import {createStore, applyMiddleware} from 'redux';
import reducer from './reducers';
import state from './state';
import thunk from 'redux-thunk';

export default createStore(reducer, state, applyMiddleware(thunk))