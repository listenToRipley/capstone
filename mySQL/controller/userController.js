const mysql = require('mysql')
const pool = require('../sql/connection')
const { handleSQLError } = require('../sql/error')
//this will pull the user's information
//will also help with finding users

//GET 
const getAllUsers = (req, res) => {
  console.log('what is the req...', req)
  //write a query that returns all the users 
  pool.query("SELECT * FROM kitchenSink.users", (err, rows) => {
    if(err) return handleSQLError(res, err)
    return res.json(rows); 
  })
}


//write a query the returns a requested user - used to validate login 
//app info table 
  //username
  //password

//write a query the returns all information related to a specific user - used to create user profile 
  //from the following tables 
  //user
  //userLocation 
  //app info 
  //likes, dislikes, diet and allergies 
  //display preferences 

//POST

//write a query the creates a new user 

//PUT 

//write a query that updates content for a user 

module.exports = { 
  getAllUsers
}