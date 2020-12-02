//userPersonalInfo on back end 
import {USER_INFORMATION} from './types'

export const userInfo = (token) => async dispatch => {
  let path = `/postLogin/current/info`
  let intake = token
  console.log('here is the token you nee for the path', token)

  try{
      let res = await fetch(path, {
        method: 'GET',
        headers: {
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
      })
    } catch (e) {
      return 'what the error the user details? ', {e}
  }

}
