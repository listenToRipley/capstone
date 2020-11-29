import {LOGIN} from './types'

const baseline = `http://localhost:4001/`

export const login = (username, password) => async dispatch => {
  let path = `postLogin/`
  let params = `${username.value}/${password.value}`
  let fullPath = `${baseline}${path}${params}`.trim()

  console.log('the path : ', fullPath)

    try{

        let res = await fetch(fullPath,{
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