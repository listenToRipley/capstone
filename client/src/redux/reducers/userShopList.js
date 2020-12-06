import {ITEMS_ON_SHOPPING_LIST} from '../actions/types'
import state from '../state'

let initialState = {...state}
//this isn't getting hit right now. 
console.log('state is shop list? ', state)

export default function(state = {...initialState}, action){
  console.log('make sure I understand the ', state, 'and ', action)
  switch(action.type) {
    case ITEMS_ON_SHOPPING_LIST: 
    return [action.payload.shopList]
    default: return state
  }
}