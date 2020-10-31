const mysql = require('mysql')
const pool = require('../sql/connection')
const { handleSQLError } = require('../sql/error')

//GET
const verifyCreation = (req, res) => {
  console.log('want a list of username to check again for created name?')
}

const forgotUsername = (req, res) => {
  //find user based on email address, return their username and email address 
    console.log('you forgot what your username is?')
  }

//POST  
const createUser = (req, res) => {
  const { username, password, email, firstName, lastName, dobMonth, dobDate, dobYear} = req.body

  //need to test the ignore part of this
  //need to return a verification of sorted if the record add is not successful. 
  let sql='INSERT IGNORE INTO `appInfo` (username, password, email ) VALUES (? ,?, ?); INSERT INTO `usersDetails` (username, firstName, lastName, dobMonth, dobDate, dobYear, signedUp) VALUES (?, ?, ?, ?, ?, ?, NOW()); INSERT INTO `usersDisplayPreferences` (username) VALUES (?); INSERT INTO `pantriesSettings` (owner) VALUES (?); INSERT INTO `shopListsSettings` (owner) VALUES (?); INSERT INTO `palListsSettings` (owner) VALUES (?); INSERT INTO `usersLocations` (username) VALUES (?); INSERT INTO `access` (username, pantry, pantryRole, shopList, shopListRole) VALUES (?,(SELECT pantrySettingId FROM pantriesSettings WHERE owner=?), 2, (SELECT shopListSetId FROM shopListsSettings WHERE owner=?), 2);'

  //there are a lot of entries that inputs that are repeated, is there a way to only use it once instead of having to have the same input over and over again?

  sql = mysql.format(sql, [username, password, email, firstName, lastName, dobMonth, dobDate, dobYear, username, username, username, username, username, username, username])

  pool.query(sql, (err, results) => {
    if(err) return handleSQLError(res, err)
    return res.json({ newId: results.insertId}); //need to verify this
    //also want to try out res.redirect('../routers/postLogin') <- also see if there would be a way to say that new input username. 
  })  
}

//PUT
const forgotPassword = (req, res) => {
  //find the use based on their email, create new password, update the password in mysql, get new password, get email of user 
  console.log('you for got your password you say?')
}

module.exports = {
  verifyCreation,
  createUser,
  forgotPassword,
  forgotUsername
}