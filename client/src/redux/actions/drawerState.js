import {DRAWER_STATE} from './types'

export const drawerState = (boo) => {
 
  return {
    type: DRAWER_STATE,
    payload: {
      openDrawer: boo
    }
  }
}