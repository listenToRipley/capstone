const mysql = require('mysql')
const pool = require('../../../sql/connection')
const { handleSQLError } = require('../../../sql/error')

//PUT
const updatePassword = (req, res) => {
  console.log('you have now update the password for this user')

  const { password } = req.body

  let sql='UPDATE appInfo SET password=? WHERE username=?'

  sql=mysql.format(sql,[password,  req.params.username])

  pool.query(sql, (err, results) => {
    if (err) return handleSQLError(res, err)
    return res.status(204).json();
  })

}


module.exports = {
  updatePassword
}