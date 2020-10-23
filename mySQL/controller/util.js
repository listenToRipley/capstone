const mysql = require('mysql')
const pool = require('../sql/connection')
const { handleSQLError } = require('../sql/error')

//GET
const allUsers = (req, res) => {
  console.log('what is the req...', req)
  let sql= 'SELECT aI.username, uD.firstName, uD.lastName, aI.email, uD.dobMonth, uD.dobDate, uD.dobYear, aI.active, uD.signedUp FROM appInfo AS aI JOIN usersDetails AS uD ON aI.username = uD.username; '
  //write a query that returns all the users 
  pool.query(sql, (err, rows) => {
    if(err) return handleSQLError(res, err)
    return res.json(rows); 
  })
}

//POST
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

module.exports = {
  allUsers,
  addMeasurement,
  addAllergy,
  addDiet
 }