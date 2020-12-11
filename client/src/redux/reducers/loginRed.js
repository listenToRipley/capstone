import {LOGIN} from '../actions/types'
import state from '../state'

let initialState = {...state}

export default function(state = {...initialState}, action){
    switch(action.type){
      case LOGIN:
        let newState = [{...state.user}]
        return newState = action.payload.user
      default: return state
    }

}

