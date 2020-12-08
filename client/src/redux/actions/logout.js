import {LOGOUT} from './types'
import state from '../state'

export const logout = (b00) => {
  console.log('state within the actions', state)
  return {
    type: LOGOUT,
    payload: {...state}
  }
}