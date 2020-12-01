import {USER_INFORMATION} from '../actions/types'
import state from '../state'

let startingState = {...state}

export default function(state = startingState, action){
  console.log(action.payload)
  switch(action.type){
      case USER_INFORMATION:
      let newState =  action.payload.userInfo
      return newState
      default: return state
  }

}