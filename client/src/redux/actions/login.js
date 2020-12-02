import {LOGIN} from './types'

export const login = (username, password) => async dispatch => {
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
        dispatch( {
            type: LOGIN,
            payload: {
              user: {
                username: username.value,
                password: password.value,
                validation: true,
                pass: token
              }
            }
        })
    }
    catch(e){
        return 'what is the error? ', {e}
    }
}