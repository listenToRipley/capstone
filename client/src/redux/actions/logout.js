import {LOGOUT} from './types'
import state from '../state'

export const logout = (boo) => {
  console.log('hey, you want to logout?')
  return {
    type: LOGOUT,
    payload: state
  }
}