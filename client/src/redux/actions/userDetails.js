//userPersonalInfo on back end 
import {USER_DETAILS} from './types'
import moment from 'moment'

export const getDetails = (pass, user) => async dispatch => {
  console.log('user in user details ?', user.username)
  let path = `/postLogin/${user.username}/current/info`
  let intake = pass.token
  console.log('here is the path you are trying to use', path)

  try{
      let res = await fetch(path, {
        method: 'GET',
        headers: {
          Accept: "application/json", "Content-Type": "application/json",
          token: `${intake}`,
        }
      }
      )
      console.log('this is the res from the fetch? ', res)
      let getResult = await res.json()
      let result = {...getResult}
      console.log('what is the result for the call? ', result[0])
      dispatch({
        type: USER_DETAILS,
          payload: {
            userDetails: {
              userLocationId: result[0].userLocationId,
              displayPrefId: result[0].displayPrefId, 
              pantryId: result[0].pantrySettingId, 
              shopListId: result[0].shopListSetId, 
              palListId: result[0].palListSettingsId, 
              accessId: result[0].accessId,
              time:moment(),
              run: true
            }
          }
      })
    } catch (e) {
      return 'what the error the user details? ', {e}
  }

}
