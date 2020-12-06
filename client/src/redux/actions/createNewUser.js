import {CREATE_NEW_USER} from './types'
import moment from 'moment'

export const createNewUser = (username, firstName, lastName, email, password, dobMonth, dobDay, dobYear) => async dispatch => {
  console.log('the input looks like? ', username, firstName, lastName, email, password, dobMonth, dobDay, dobYear)
  try{
      let res = await fetch('/preLogin/createUser', {
        method: 'POST',
        headers: {
          Accept: "application/json", "Content-Type": "application/json",
          "username": `${username}`,
          "password": `${password}`,
          "email": `${email}`,
          "firstName": `${firstName}`,
          "lastName": `${lastName}`,
          "dobMonth": dobMonth,
          "dobDate": dobDate,
          "dobYear": dobYear
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