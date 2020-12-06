import {CREATE_NEW_USER} from './types'
import moment from 'moment'

export const createNewUser = (pass, user) => async dispatch => {

  try{
      let res = await fetch('/preLogin/createUser', {
        method: 'POST',
        headers: {
          Accept: "application/json", "Content-Type": "application/json",
        }
      }
      )
      let getResult = await res.json()
      console.log('create new user', getResult)
      let result = {...getResult}
      dispatch({
        type: CREATE_NEW_USER,
          payload: {
            created: true,
            returned: result
          }
      })
    } catch (e) {
      return 'what the error the user details? ', {e}
  }

}