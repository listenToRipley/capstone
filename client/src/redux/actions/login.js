import {LOGIN} from './types'


export const login = (username, password) => {
  console.log('the username  is :', username.value,'the password:',password.value)
return {
  type: LOGIN,
  payload: {
    user: {
      username: username.value,
      password: password.value,
      validation: true,
      token: `${username.value}+${password.value}=true~START_USING!`
    }
  }
 }
}
// const baseline = `http://localhost:4001/`

// export const login = (username, password) => async dispatch => {
//   let path = `postLogin/`
//   let params = `${username.value}/${password.value}`
//   let fullPath = `${baseline}${path}${params}`.trim()

//   console.log('the path : ', fullPath)

//     try{
        
//         let res = await fetch(fullPath,{
//           method: 'GET',
//           headers: {
//             Accept: "application/json", "Content-Type": "application/json"
//             }
//         }
//         )
//         console.log('can you see res? : ',res)
//         .then(res)
//         .then(res => res.json())
//         .then(
//         dispatch( {
//             type: LOGIN,
//             payload: {
//               user: {
//                 username: username.value,
//                 password: '',
//                 validation: true,
//                 token: res.json(token)
//               }
//             }
//         })
//       )
//     }
//     catch(e){
//         console.log('what is the error? ', {e})
//     }
// }