const mysql = require('mysql')
const pool = require('../../sql/connection')
const { handleSQLError } = require('../../sql/error')


//search database to validate username and password match the provided input
//validate login
const login = (req, res, next) => {

  let user = req.params.username
  
  res.send('You found your users '+ user)
  console.log('can you see your response', [req.params.username])
  //should the results re-route to another area when completed? 
}



module.exports = { 
  login
}