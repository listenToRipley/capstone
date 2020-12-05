//userPersonalInfo on back end 
import {USER_DETAILS} from './types'
import moment from 'moment'

export const getDetails = (pass, user) => async dispatch => {
  console.log('object on user info? ', user.username, pass.token)
  let path = `/postLogin/${user.username}/current/info`
  let intake = pass.token

  try{
      let res = await fetch(path, {
        method: 'GET',
        headers: {
          Accept: "application/json", "Content-Type": "application/json",
          token: `${intake}`,
        }
      }
      )
      let getResult = await res.json()
      let result = {...getResult}
      console.log('res', result[0])
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
