const mysql = require('mysql')
const pool = require('../../../sql/connection')
const { handleSQLError } = require('../../../sql/error')
const bcrypt = require('bcrypt')
const saltRounds = 10;


// const hexPass = async (pass) => {
//   // console.log('you are trying to pass the test for this password', req.body.password)
//   const {pass} = req.body

//   bcrypt.hash(pass, saltRounds, (err, hash) => {
//     console.log('here is the password, ', pass, ' and the hash is :', hash)

//     return hash
//   })
 
// }

// console.log(hexPass('davidbowie'))

//PUT
const updatePassword = async (req, res) => {
  res.setHeader('Content-Type', 'text/plain') 

  const {password} = req.body
  const {email} = req.params

  bcrypt.hash(password, saltRounds, (err, hash) => {
  
  let sql='UPDATE appInfo SET password=? WHERE email=?'

  sql=mysql.format(sql,[hash, email])

  pool.query(sql, (err, results) => {
    if (err) return handleSQLError(res, err)
    
    return res.send('Your password has now been updated')
  })

  })
}

module.exports = {
  updatePassword

}