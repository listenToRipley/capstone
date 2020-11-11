const mysql = require('mysql')
const pool = require('../../sql/connection')
const { handleSQLError } = require('../../sql/error')
const bcrypt = require('bcrypt')
const saltRounds = 10


//search database to validate username and password match the provided input
//validate login
const login = (req, res, next) => {

  let { user, password } = req.body

  bcrypt.hash(password, saltRounds, (err, hash) => {
    sql='SELECT COUNT(username) FROM appInfo WHERE username= ? AND password= ? '
  
    sql = mysql.format(sql, [user, hash])

  
    pool.query(sql, (err, row) => {
      if(err) handleSQLError(res, err)
      let total = row[0]['COUNT(username)']
      console.log(total)
      console.log('username :', user, ' password', hash)
      if(total===1) {
        res.setHeader('username', `${user}`)
        res.setHeader('password', `${hash}`)
      } else {
        res.send('Sorry, we cannot find that login')
      }
  
    })
  })
  
}



module.exports = { 
  login
}