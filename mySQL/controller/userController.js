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

const validateUser = (req, res) => { 
  console.log('validate email and password pair match')
  //write a query the returns a requested user - used to validate login 
//app info table 
  //username
  //password
}


const infoOfUser = (req, res) => {
  console.log('get all the users information')
  //write a query the returns all information related to a specific user - used to create user profile 
  //from the following tables 
  //user
  //userLocation 
  //app info 
  //likes, dislikes, diet and allergies 
  //write a query that updates content for a user 
}

//POST
const createUser = (req, res) => {
  //write a query the creates a new user 
  console.log('create a new user')
  //user
  //appInfo
  //displayPreference
  //userLocation
  //palList
  //shoppingListSettings
  //pantrySettings
}



//PUT 
const updateInfoOfUser = (req, res) => {
//write a query that updates content for a user 
console.log('update this users information')
  //appInfo
  //displayPreferences 
}


module.exports = { 
  getAllUsers,
  validateUser,
  infoOfUser,
  createUser,
  updateInfoOfUser
}