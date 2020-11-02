const mysql = require('mysql')
const pool = require('../../sql/connection')
const { handleSQLError } = require('../../sql/error')

//GET 
const forgotUsername = (req, res) => {
  const {email} = req.params

  let sql = 'SELECT username FROM appInfo WHERE active=1 AND email=?'

  sql= mysql.format(sql, [email])

  pool.query(sql, (err, row) => {
    if(err) handleSQLError(res, err)
     
    if(res.json(row)===null) {
      res.send('Sorry, we cannot find a login associated with the email address.') //should get reroute to create a login 
    } else {
      res.json(row)
    }
  })
}


const validateLogIn = (req, res, next) => { 
  console.log('validate email and password pair match')
  //write a query the returns a requested user so we can validate the username and password provided are listed in the SQL and they match

  let sql = 'SELECT username FROM appInfo WHERE active=1 AND username=? AND password=?'

  sql= mysql.format([req.params.user], [req.params.password])
  
  pool.query(sql, (err, row) => {
    if(err) return handleSQLError(res, err)
      if (res.json(row) === null) {
        res.send('Sorry, we cannot find that login')
      } else {
        res.json(row)
      }
  })   
}


module.exports = { 
  forgotUsername,
  validateLogIn,

}