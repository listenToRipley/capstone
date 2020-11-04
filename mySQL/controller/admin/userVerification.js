const mysql = require('mysql')
const pool = require('../../sql/connection')
const { handleSQLError } = require('../../sql/error')


//search database to validate username and password match the provided input
//validate login
const login = (req, res, next) => {

  let { user, password } = req.params
  console.log('username :', user, ' password', password)

  sql='SELECT username FROM appInfo WHERE username= ? AND password= ? ;  '
  
  sql = mysql.format(sql, [user, password])

  pool.query(sql, (err, row) => {
    if(err) handleSQLError(res, err)
    return res.json(row)

  })
}



module.exports = { 
  login
}