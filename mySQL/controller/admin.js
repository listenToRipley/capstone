const mysql = require('mysql')
const pool = require('../sql/connection')
const { handleSQLError } = require('../sql/error')

//GET 
const testing = (req, res) => {
  res.send('You found the admin view')
}

const allMerges = (req, res) => {
  console.log('my whole merge table')
//write a query that returns all your merges 
  pool.query('SELECT * FROM mergeRequests', (err, rows) => {
    if(err) return handleSQLError(res, err)
    return res.json(rows); 
  })
}

const allPalLists = (req, res) => {
  console.log('all pal lists')
  pool.query('SELECT * FROM palListSettings', (err, rows) => {
    if(err) return handleSQLError(res, err)
    return res.json(rows); 
  })
}

const allPantries = (req, res) => {
  console.log('all pantries')

  pool.query('SELECT * FROM pantriesSettings', (err, row) => {
    if(err) return handleSQLError(res, err)
    return res.json(rows); 
  })
}

const allShoppingLists = (req, res) => {
  console.log('all the shopping lists')

  pool.query('SELECT * FROM shopListSettings', (err, rows) => {
    if(err) return handleSQLError(res, err)
    return res.json(rows); 
  })
}

const allDiets = (req, res) => {
  console.log('all the diets, to be use to drop down lists')

  pool.query('SELECT * FROM diets', (err, rows) => {
    if (err) return handleSQLError(res, err)
    return res.json(rows);
  })
}

const validateLogIn = (req, res) => { 
  console.log('validate email and password pair match')
  //write a query the returns a requested user so we can validate the username and password provided are listed in the SQL and they match 
  pool.query("SELECT * FROM appInfo", (err, row) => {
    if(err) return handleSQLError(res, err)
    return res.json(row); 
  })   
}

//counts: 
const countSummary = (req, res) => {
  console.log('this is the summary count on all records on my table right now')
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
  testing,
  allPantries,
  allMerges,
  allPalLists,
  allDiets,
  validateLogIn,
  countSummary,
  deactivateUser,
  reactivateUser
}