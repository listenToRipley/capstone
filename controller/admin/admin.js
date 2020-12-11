const mysql = require('mysql')
const pool = require('../../sql/connection')
const { handleSQLError } = require('../../sql/error')
const bcrypt = require('bcrypt')


//GET 
const forgotUsername = (req, res) => {

  let sql = 'SELECT username FROM appInfo WHERE active=1 AND email=?'

  sql= mysql.format(sql, [req.params.email])

  pool.query(sql, (err, row) => {
    if(err) handleSQLError(res, err)
     
    if(row.length===0) {
      res.send('Sorry, we cannot find a login associated with that email address.') //should get reroute to create a login 
    } else {
     return res.json(row)
    }
   })
}


module.exports = { 
  forgotUsername
}