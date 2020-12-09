import {DRAWER_STATE} from './types'

export const drawerState = (boo) => {
  console.log('see you this? ')
  return {
    type: DRAWER_STATE,
    payload: {
      openDrawer: boo
    }
  }
}