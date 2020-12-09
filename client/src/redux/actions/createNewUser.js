import {CREATE_NEW_USER} from './types'

export const createNewUser = (username, firstName, lastName, email, password, bMonth, bDay, bYear) => async dispatch => {

 let sendUser =  JSON.stringify({
    "username": `${username}`,
    "password": `${password}`,
    "email": `${email}`,
    "firstName": `${firstName}`,
    "lastName": `${lastName}`,
    "dobMonth": bMonth,
    "dobDate": bDay,
    "dobYear": bYear
  })
 
  try{
      let res = await fetch('preLogin/createUser', {
        method: 'POST',
        headers: {
          Accept: "application/json", "Content-Type": "application/json",
        },
        body: sendUser
       } )

      let result = await res.json()
      
      dispatch({
        type: CREATE_NEW_USER,
          payload: { 
            newUser: result
          }
      })
    } catch (e) {
      return 'what the error the user creation? ', {e}
  }

}