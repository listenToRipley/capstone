import {CREATE_NEW_USER} from './types'

export const createNewUser = (username, firstName, lastName, email, password, bMonth, bDay, bYear) => async dispatch => {
 console.log('values', username, firstName, lastName, email, password, bMonth, bDay, bYear)

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
      console.log('res? ', res)
      let result = await res.json()
      console.log('result from post? ',result)
     
      dispatch({
        type: CREATE_NEW_USER,
          payload: { ...result  }
      })
    } catch (e) {
      return 'what the error the user details? ', {e}
  }

}