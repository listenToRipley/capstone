import { createStore, applyMiddleware, compose } from 'redux';
import reducers from './reducers';
import state from './state';
import thunk from 'redux-thunk';

const startState = {}

const store = createStore(reducers, startState, compose(applyMiddleware(thunk)))

export default store