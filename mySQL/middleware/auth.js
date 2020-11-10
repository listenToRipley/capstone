const mysql = require('mysql')
const pool = require('../sql/connection')
const {handleSQLError} = require('../sql/error')
const jwt = require('jwks-rsa')

const auth = (req, res, next) => {
  const user = require.header('username')
  const password = require.header('password')

  sql='SELECT COUNT(username) FROM appInfo WHERE username= ? AND password= ? ;  '
  
  sql = mysql.format(sql, [user, password])

  pool.query(sql, (err, row) => {
    if(err) handleSQLError(res, err)
    let total = row[0]['COUNT(username)']
    if(total===1) {
      next()
    } else {
      res.send('Unauthorized ')
    }

  })

}

module.exports = {
  auth
}