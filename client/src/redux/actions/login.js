import {LOGIN} from './types'
import moment from 'moment'

export const login = (username, password) => async dispatch => {
  let path = `login/${username.value}/${password.value}`
  
    try{
        let res = await fetch(path,{
          method: 'GET',
          headers: {
            Accept: "application/json", "Content-Type": "application/json"
          }
        }
        )
        let token = await res.json() 
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
  
    }
    catch(e){
        return 'what is the error? ', {e}
    }
}

