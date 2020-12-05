const mysql = require('mysql')
const pool = require('../../sql/connection')
const { handleSQLError } = require('../../sql/error')
const bcrypt = require('bcrypt')
const moment = require('moment')
const jwt = require('jsonwebtoken')

//search database to validate username and password match the provided input
//validate login
const login = (req, res, next) => {

  let { user, password } = req.params

  console.log('are you getting to the sql? ')

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

  console.log('what creating a session', user, ' pass ? ', password)
  const current = {
    username: user, 
    pass: password,
    day: moment()
  }

  console.log('what does current look like ? ', current)

  const token =jwt.sign(current, 'other') //second agr needs to be saved in to env
  console.log('you making your token? ', token)
  return res.json({token: token }) // this will be a cookie once we get to the front end 
}

module.exports = { 
  login,
  createSession
}