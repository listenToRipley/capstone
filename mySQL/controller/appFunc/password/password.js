const mysql = require('mysql')
const pool = require('../../../sql/connection')
const { handleSQLError } = require('../../../sql/error')
const bcrypt = require('bcrypt')


//PUT
const updatePassword = async (req, res) => {

  const salt = bcrypt.genSaltSync(10)

  const {password} = req.body
  const {email} = req.params

  bcrypt.hash(password, salt, (err, hash) => {
  
  let sql='UPDATE appInfo SET password=? WHERE email=?'

  sql=mysql.format(sql,[hash, email])

  pool.query(sql, (err, results) => {
    if (err) return handleSQLError(res, err)

    if(results.affectedRows === 0) {
      return res.send(`Sorry, something went wrong, we don't seem to have that email on record`)
    } else {
      return res.send('Your password has now been reset')
    }
    
  })
    console.log('here?')
  })
}

const updateFromLogPassword = async (req, res) => {

  const salt = bcrypt.genSaltSync(10)

  const {password} = req.body

  bcrypt.hash(password, salt, (err, hash) => {
  
  let sql='UPDATE appInfo SET password=? WHERE username=?'

  sql=mysql.format(sql,[hash, req.user])

  pool.query(sql, (err, results) => {
    if (err) return handleSQLError(res, err)

    if(results.affectedRows === 0) {
      return res.send(`Sorry, something went wrong, we don't seem to have that email on record`)
    } else {
      return res.send('Your password has now been reset')
    }
    
  })
    console.log('here?')
  })
}


module.exports = {
  updatePassword,
  updateFromLogPassword

}