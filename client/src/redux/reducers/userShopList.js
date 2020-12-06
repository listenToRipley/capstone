import {YOUR_SHOPPING_LIST} from '../actions/types'
import state from '../state'

console.log('the actions ? ', YOUR_SHOPPING_LIST)

let initialState = {...state}
//this isn't getting hit right now. 
console.log('state is shop list? ', state)

export default function(state = {...initialState}, action){
  console.log('make sure I understand the ', state, 'and ', action)
  switch(action.type) {
    case YOUR_SHOPPING_LIST: 
    let newState = [{...state.shopList}]
    return newState = [action.payload.shopList]
    default: return state
  }
}