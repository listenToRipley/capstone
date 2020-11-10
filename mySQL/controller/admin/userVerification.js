const mysql = require('mysql')
const pool = require('../../sql/connection')
const { handleSQLError } = require('../../sql/error')
const bcrypt = require('bcrypt')
const saltRounds = 10


//search database to validate username and password match the provided input
//validate login
const login = (req, res, next) => {

  let { user, password } = req.params
  console.log('username :', user, ' password', password)

  bcrypt.hash(password, saltRounds, (err, hash) => {
    sql='SELECT username, password FROM appInfo WHERE username= ? AND password= ? ;  '
  
    sql = mysql.format(sql, [user, hash])
  
    pool.query(sql, (err, results) => {
      if(err) handleSQLError(res, err)
      let total = row[0]['COUNT(email)']
      if(total!==0) {
        res.send(results)
      } else {
        res.send('Sorry, we cannot find that login')
      }
  
    })
  })
  
}



module.exports = { 
  login
}