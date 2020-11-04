const mysql = require('mysql')
const pool = require('../../sql/connection')
const { handleSQLError } = require('../../sql/error')

//GET 
const forgotUsername = (req, res) => {

  let sql = 'SELECT username FROM appInfo WHERE active=1 AND email=?'

  sql= mysql.format(sql, [req.params.email])

  pool.query(sql, (err, row) => {
    if(err) handleSQLError(res, err)
     
    if(res.json(row)===null) {
      res.send('Sorry, we cannot find a login associated with the email address.') //should get reroute to create a login 
    } else {
      res.json(row)
    }
  })
}


module.exports = { 
  forgotUsername
}