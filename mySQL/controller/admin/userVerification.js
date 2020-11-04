const mysql = require('mysql')
const pool = require('../../sql/connection')
const { handleSQLError } = require('../../sql/error')


//search database to validate username and password match the provided input
//validate login
const login = (req, res, next) => {

  let { username, password } = req.params
  console.log('username :', username, ' password', password)

  sql='SELECT COUNT(username) FROM appInfo WHERE username= ? AND password= ? ;  '
  
  sql = mysql.format(sql, [username, password])

  pool.query(sql, (err, row) => {
    if(err) handleSQLError(res, err)

    if(res.json(row) < 0) {
      return res.send('sorry, we cannot find that user')
    } else {
      return res.send('You found your users '+ username)
      next()
    }
  })
}



module.exports = { 
  login
}