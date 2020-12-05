import {ITEMS_ON_SHOPPING_LIST} from '../actions/types'
import state from '../state'

let initialState = {...state}
console.log('state is shop list? ', state)

export default function(state = {...initialState}, actions){
  switch(actions.type) {
    case ITEMS_ON_SHOPPING_LIST: 
    let list = [...state.shopList]
    return newList = action.payload.shopList
    default: return state
  }
}