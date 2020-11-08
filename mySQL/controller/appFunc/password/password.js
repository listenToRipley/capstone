const mysql = require('mysql')
const pool = require('../../../sql/connection')
const { handleSQLError } = require('../../../sql/error')
const bcrypt = require('bcrypt')

const testPassword = async (req, res) => {
  console.log('you are trying to pass the test for this password', req.body.password)
  const {password} = req .body

  bcrypt.hash(password, 10, (err, hash) => {
    res.send(hash) 
  })
 
}

//PUT
const updatePassword = (req, res) => {
  console.log('you have now update the password for this user')

  const { password } = req.body

  let sql='UPDATE appInfo SET password=? WHERE username=?'

  sql=mysql.format(sql,[ hexPass(password),  req.params.username])

  pool.query(sql, (err, results) => {
    if (err) return handleSQLError(res, err)
    return res.status(204).json();
  })

}


module.exports = {
  updatePassword,
  testPassword
}