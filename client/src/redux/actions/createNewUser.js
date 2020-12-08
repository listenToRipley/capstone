import {CREATE_NEW_USER} from './types'
import moment from 'moment'



export const createNewUser = (userId, firstName, lastName, email, password, bDay) => async dispatch => {
 console.log('values', userId.value, firstName.value, lastName.value, email.value, password.value, bDay.value)
 
 let dob = ''

const modBirthday = (day) => {
  console.log(day)
    return dob = day.split('-')
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
          "dobMonth": dob[2],
          "dobDate": dob[1],
          "dobYear": dob[0]
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