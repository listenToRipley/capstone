//userPersonalInfo on back end 
import {USER_DETAILS} from './types'

export const userDetails = (pass, user) => async dispatch => {
  let path = `/postLogin/current/info`
  let intake = pass.token
  let today = new Date()
  console.log('here is the path you are trying to use', path)

  try{
      let res = await fetch(path, {
        method: 'GET',
        headers: {
          Accept: "application/json", "Content-Type": "application/json",
          token: `${intake}`,
          "Access-Control-Allow-Origin": "*"
        }
      }
      )
      console.log('this is the res from the fetch? ', res)
      let result = await res.json()
      console.log('what is the result for the call? ', result)
      dispatch({
        type: USER_DETAILS,
          payload: {
            userInfo: {
              username: user.username,
              email: result[0].email, 
              firstName: result[0].firstName, 
              lastName: result[0].lastName, 
              userLocationId: result[0].userLocationId,
              displayPrefId: result[0].displayPrefId, 
              pantryId: result[0].pantrySettingId, 
              shopListId: result[0].shopListSetId, 
              palListId: result[0].palListSettingsId, 
              accessId: result[0].accessId,
              loggedIn: today,
              run: true
            }
          }
      })
    } catch (e) {
      return 'what the error the user details? ', {e}
  }

}
