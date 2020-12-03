//userPersonalInfo on back end 
import {USER_INFORMATION} from './types'

export const userDetails = (pass, user) => async dispatch => {
  let path = `/postLogin/${user.username}/current/info`
  let intake = pass.token
  let today = new Date()
  // console.log('in the call, your token', intake)

  try{
      let res = await fetch(path, {
        method: 'GET',
        headers: {
          Accept: "application/json", "Content-Type": "application/json",
          token: `${intake}`
        }
      }
      )
      let result = await res.json()
      console.log('what is the result for the call? ', result)
      dispatch({
        type: USER_INFORMATION,
          payload: {
            userInfo: {
              username: result.username,
              email: result.email, 
              firstName: result.firstName, 
              lastName:result.lastName, 
              userLocationId:result.userLocationId,
              displayPrefId:result.displayPrefId, 
              pantryId:result.pantrySettingId, 
              shopListId:result.shopListSetId, 
              palListId:result.palListSettingsId, 
              accessId:result.accessId,
              loggedIn: today
            }
          }
      })
    } catch (e) {
      return 'what the error the user details? ', {e}
  }

}
