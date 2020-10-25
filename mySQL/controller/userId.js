const mysql = require('mysql')
const pool = require('../sql/connection')
const { handleSQLError } = require('../sql/error')

//search database to validate username
//validate login
const login = (req, res, next) => {

  let user = req.params.username
  
  res.send('You found your users', )
  console.log('can you see your response', res.json(user))

  next()
}

module.exports = { 
  login
}