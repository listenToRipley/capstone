const mysql = require('mysql')
const pool = require('../sql/connection')
const { handleSQLError } = require('../sql/error')

//GET 
const getAllUsers = (req, res) => {
  console.log('what is the req...', req)
  //write a query that returns all the users 
  pool.query("SELECT * FROM kitchenSink.users", (err, rows) => {
    if(err) return handleSQLError(res, err)
    return res.json(rows); 
  })
}

const validateLogIn = (req, res) => { 
  console.log('validate email and password pair match')
  //write a query the returns a requested user so we can validate the username and password provided are listed in the SQL and they match 
  pool.query("SELECT * FROM kitchenSink.appInfo", (err, row) => {
    if(err) return handleSQLError(res, err)
    return res.json(row); 
  })
}


//PUSH
const addMeasurement = (req, res) => {
  console.log('you have now added a unit of measurement')
  //call on table measurements 
}

const addAllergy = (req, res) => {
  console.log('you have now added an allergy to your list')
  //call on table allergies
}

const addDiet = (req, res) => {
  console.log('you have now added a new diet')
  //call on table diets
}

//PUT
const deactivateUser = (req, res) => {
  console.log('you have not deactivated a user')
  //call on table user, column active
}

const reactivateUser = (req, res) => {
  console.log('you have now reactivated a user')
  //call on table user, column active
}

//DELETE


module.exports = {
  getAllUsers,  
  validateLogIn,
  addMeasurement,
  addAllergy,
  addDiet,
  deactivateUser,
  reactivateUser
}