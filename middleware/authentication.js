const mysql = require('mysql')
const pool = require('../sql/connection')
const {handleSQLError} = require('../sql/error')
const bcrypt = require('bcrypt')
const moment = require('moment')
const jwt = require('jsonwebtoken')

const auth = (req, res, next) => {
  const token = req.header('token') 
  console.log('response in the auth', token, 'what about params > ', req.params.user)
  try {
    console.log(`${req.user.params}, is trying to get access`)
    const decodedToken = jwt.verify(token, 'other')
    req.params.user = decodedToken.username

    next()
  } catch {
    res.send('Unauthorized ')
  }
}

module.exports = {
  auth,

}