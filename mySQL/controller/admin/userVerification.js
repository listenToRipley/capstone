const mysql = require('mysql')
const pool = require('../../sql/connection')
const { handleSQLError } = require('../../sql/error')
const bcrypt = require('bcrypt')

//search database to validate username and password match the provided input
//validate login
const login = (req, res, next) => {

  let { user, password } = req.body

    sql='SELECT password FROM appInfo WHERE username= ?'
  
    sql = mysql.format(sql, [user])
  
    pool.query(sql, async (err, results) => {
      if(err) handleSQLError(res, err)
    
    const match = await bcrypt.compare(password, results[0].password)

    if (match) {
     next()
    } else {
      res.send('wrong')
    }

  })
}

module.exports = { 
  login
}