import {CREATE_NEW_USER} from './types'
import moment from 'moment'

export const createNewUser = (userId, firstName, lastName, email, password, bDay) => async dispatch => {

  let dobMonth = ''
  let dobDate = ''
  let dobYear = ''

  const modBirthday = (day) => {
      let dob = day.value.split('-')
      dobYear=dob[0]
      dobDate=dob[1]
      dobMonth=dob[2]
  }

  modBirthday(bDay.value)

  try{
      let res = await fetch('/preLogin/createUser', {
        method: 'POST',
        headers: {
          Accept: "application/json", "Content-Type": "application/json",
          "username": `${userId.value}`,
          "password": `${password.value}`,
          "email": `${email.value}`,
          "firstName": `${firstName.value}`,
          "lastName": `${lastName.value}`,
          "dobMonth": dobMonth,
          "dobDate": dobDate,
          "dobYear": dobYear
        }
      }
      )
      let getResult = await res.json()
      let result = {...getResult}
      dispatch({
        type: CREATE_NEW_USER,
          payload: {
            newUser: {
              created: true,
              returned: result
            }
          }
      })
    } catch (e) {
      return 'what the error the user details? ', {e}
  }

}