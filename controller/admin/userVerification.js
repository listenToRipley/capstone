const mysql = require('mysql')
const pool = require('../../sql/connection')
const { handleSQLError } = require('../../sql/error')
const bcrypt = require('bcrypt')
const moment = require('moment')
const jwt = require('jsonwebtoken')

const login = (req, res, next) => {

  let { user, password } = req.params

    sql='SELECT password FROM appInfo WHERE username= ?'
    console.log('what is the user name', user , 'and password from client side? ', password)
    sql = mysql.format(sql, [user])
  
    pool.query(sql, async (err, row) => {
      if(err) handleSQLError(res, err)
    
    const match = await bcrypt.compare(password, row[0].password)

    if (!match) {
      res.send(false)
    } else {
      next() 
    }

  })
} 

const createSession = (req, res) => {
  const {user, password } = req.params

  const current = {
    username: user, 
    pass: password,
    day: moment()
  }

  const token =jwt.sign(current, 'other') 

  return res.json({token: token })
}

module.exports = { 
  login,
  createSession
}