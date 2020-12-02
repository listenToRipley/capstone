//userPersonalInfo on back end 
import {USER_INFORMATION} from './types'

export const userInfo = (pass) => async dispatch => {
  let path = `/postLogin/current/info`
  let intake = pass.token
  let today = new Date()
  console.log('in the call, your token', intake)

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
              username: '',
              email: '', 
              firstName:'', 
              lastName:'', 
              userLocationId:'' ,
              displayPrefId:'', 
              pantryId:'', 
              shopListId:'', 
              palListId:'', 
              accessId:'',
              loggedIn: today
            }
          }
      })
    } catch (e) {
      return 'what the error the user details? ', {e}
  }

}
