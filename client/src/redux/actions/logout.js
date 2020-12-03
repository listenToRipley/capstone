import {LOGOUT} from './types'

export const logout = (boo) => {
  console.log('hey, you want to logout?')
  return {
    type: LOGOUT,
    payload: boo
  }
}