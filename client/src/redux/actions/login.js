import {LOGIN} from './types'
import moment from 'moment'

export const login = (username, password) => async dispatch => {
  console.log('log in get ',username, password)
  let path = `login/`
  let params = `${username.value}/${password.value}`
  let fullPath = `${path}${params}`.trim()

    try{
  
        let res = await fetch(fullPath,{
          method: 'GET',
          headers: {
            Accept: "application/json", "Content-Type": "application/json"
          }
        }
        )
        let token = await res.json() 
        console.log('res',token)
        dispatch( {
            type: LOGIN,
            payload: {
              user: {
                username: username.value,
                password: password.value,
                validation: true,
                pass: token,
                time: moment().format("dddd, MMMM Do YYYY, h:mm")
              }
            }
        })
        //need to add error handling to incorrect login info, with good call received. 
    }
    catch(e){
        return 'what is the error? ', {e}
    }
}

