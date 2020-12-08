import {CREATE_NEW_USER} from './types'

export const createNewUser = (username, firstName, lastName, email, password, birthday) => async dispatch => {
 console.log('values', username, firstName, lastName, email, password, birthday)
 
 let dob = ''

const modBirthday = (day) => {
    return dob = day.split('-')
}
 
 modBirthday(birthday)

  try{
      let res = await fetch('/preLogin/createUser', {
        method: 'POST',
        headers: {
          Accept: "application/json", "Content-Type": "application/json",
        },
        body: {
          "username": `${userId}`,
          "password": `${password}`,
          "email": `${email}`,
          "firstName": `${firstName}`,
          "lastName": `${lastName}`,
          "dobMonth": dob[2],
          "dobDate": dob[1],
          "dobYear": dob[0]
        }
      }
      )
      let getResult = await res.json()
      console.log('result from post? ',getResult)
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