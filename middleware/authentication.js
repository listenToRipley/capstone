const mysql = require('mysql')
const pool = require('../sql/connection')
const {handleSQLError} = require('../sql/error')
const bcrypt = require('bcrypt')
const moment = require('moment')
const jwt = require('jsonwebtoken')

const auth = (req, res, next) => {
  const token = req.header('token') 
  console.log('response in the auth', token, 'what about params > ', req.params.user)
  try {
    console.log(`${req.user.params}, is trying to get access`)
    const decodedToken = jwt.verify(token, 'other')
    req.params.user = decodedToken.username

    next()
  } catch {
    res.send('Unauthorized ')
  }
}

//this is future state item, disregard for now 
// const mou = (req, res, next) => {
//   const user = require.header('username')
//   const password = require.header('password')

//   sql=' SELECT COUNT(aI.username) FROM appInfo AS aI JOIN access AS a ON aI.username=a.username WHERE a.shopListRole AND a.pantryRole=1 AND aI.username= ? AND password= ?'
  
//   sql = mysql.format(sql, [user, password])

//   pool.query(sql, (err, row) => {
//     if(err) handleSQLError(res, err)
//     let total = row[0]['COUNT(aI.username)']
//     if(total===1) {
//       next()
//     } else {
//       res.send('Unauthorized ')
//     }

//   })
// }

module.exports = {
  auth,
  // mou
}