import {LOGIN} from './types'

const baseline = `http:localhost:4001/`

export const login = (username, password) => async dispatch => {
  console.log('tell me the username', username.value, " and your password? ", password.value)
  let path = `postLogin/`
  let params = `${username.value}/${password.value}`

  console.log('the path : ', `${baseline}${path}${params}`)

    try{
      // axios.default.header.get['Content-Type'] = ''
        let res = await fetch(`${baseline}/${path}/${params}`,{
          method: 'GET',
          headers: {
              'Content-type': 'application/json'
            }
        }
        )
        .then(res => res.json())
        .then(
        dispatch( {
            type: LOGIN,
            payload: res.json()
        })
      )
    }
    catch(e){
        console.log(`can't find that user ${username.value}`)
    }

}