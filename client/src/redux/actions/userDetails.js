//userPersonalInfo on back end 
import {USER_INFORMATION} from './types'

export const userInfo = (user) => {
  return {
    type: USER_INFORMATION,
    payload: {
      userInfo: {
        username: user,
        email: '', 
        firstName:'', 
        lastName:'', 
        userLocationId:'' ,
        displayPrefId:'', 
        pantryId:'', 
        shopListId:'', 
        palListId:'', 
        accessId:''
      }
    }
  }
}