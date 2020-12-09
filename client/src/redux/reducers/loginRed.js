import {LOGIN} from '../actions/types'
import state from '../state'

let initialState = {...state}

export default function(state = {...initialState}, action){
  console.log('action on login ', action)
    switch(action.type){
      case LOGIN:
        let newState = [{...state.user}]
        return newState = action.payload.user
      default: return state
    }

}

