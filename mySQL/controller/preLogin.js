const mysql = require('mysql')
const pool = require('../sql/connection')
const {handleSQLError} = require('../error')

//POST
const createUser = (req, res) => {
  //write a query the creates a new user 
  console.log('create a new user')

  const { username, password, email, firstName, lastName, dobMonth, dobDate, dobYear} = req.body
  //look at the display preferences all and see if we can use similar function for inserting into tables 
  let sql=	'INSERT INTO `appInfo` (username, password, email ) VALUES (? ,?, ?); INSERT INTO `usersDetails` (username, firstName, lastName, dobMonth, dobDate, dobYear, signedUp) VALUES (?, ?, ?, ?, ?, ?, NOW()); INSERT INTO `usersDisplayPreferences` (username) VALUES (?); INSERT INTO `pantriesSettings` (owner) VALUES (?); INSERT INTO `shopListsSettings` (owner) VALUES (?); INSERT INTO `palListsSettings` (owner) VALUES (?); INSERT INTO `usersLocations` (username) VALUES (?); INSERT INTO `access` (username, pantry, pantryRole, shopList, shopListRole) VALUES (?,(SELECT pantrySettingId FROM pantriesSettings WHERE owner=?), 2, (SELECT shopListSetId FROM shopListsSettings WHERE owner=?), 2);'

  //there are a lot of entries that inputs that are repeated, is there a way to only use it once instead of having to have the same input over and over again?

  sql = mysql.format(sql, [username, password, email, firstName, lastName, dobMonth, dobDate, dobYear, username, username, username, username, username, username, username])

  pool.query(sql, (err, results) => {
    if(err) return handleSQLError(res, err)
    return res.json({ newId: results.insertId}); //need to verify this
  })  
}

//PUT

//must have a forgot password
//forgot username 

module.exports = {createUser}