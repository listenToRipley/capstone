import {CREATE_NEW_USER} from './types'
import moment from 'moment'

export const createNewUser = (username, firstName, lastName, email, password, bDay) => async dispatch => {
  console.log('the input looks like? ', username, firstName, lastName, email, password, bDay)

  let dobMonth = ''
  let dobDate = ''
  let dobYear = ''

  const modBirthday = (day) => {
    console.log('happy birthday!', day.value)
      let dob = day.value.split('-')
      console.log(dob)
      dobYear=dob[0]
      dobDate=dob[1]
      dobMonth=dob[2]
  }

  modBirthday(bDay.value)

  console.log('make sure on the birthday', dobMonth, dobDate, dobYear)

  try{
      let res = await fetch('/preLogin/createUser', {
        method: 'POST',
        headers: {
          Accept: "application/json", "Content-Type": "application/json",
          "username": `${username.value}`,
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
      console.log('create new user', getResult)
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