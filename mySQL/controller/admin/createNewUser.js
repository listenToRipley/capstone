const { NextWeek } = require('@material-ui/icons')
const mysql = require('mysql')
const pool = require('../../sql/connection')
const { handleSQLError } = require('../../sql/error')

//should my post and put get rerouted to the calls so we can see the updates? 
//GET 
const verifyUsername = (req, res, next) => {
  //make sure there isn't someone with the same username 
  const {username} = req.body

  let sql = 'SELECT COUNT(username) FROM appInfo WHERE active=1 AND username= ? ORDER BY username;'

  sql = mysql.format(sql, (username) => {
    if (err) return handleSQLError(res, err)

    if(res.json(row)>0) {
      res.send('Sorry, someone already has that username.') //should get reroute to create a login 
    } else {
      next()
    }
  })
}


const verifyEmail = (req, res, next) => {
  //make sure the person creating this login doesn't already have a login
  const {email} = req.body

  let sql = 'SELECT COUNT(email) FROM appInfo WHERE active=1 AND email= ? ORDER BY email; '

  sql = mysql.format(sql, (email) => {
    if (err) return handleSQLError(res, err)

    if(res.json(row)>0) {
      res.send('Sorry, you seem to already have a login.') //should get reroute to create a login 
    } else {
      next()
    }
  })
}

//POST

const createUser = (req, res) => {
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


module.exports = {
  verifyEmail, 
  createUser
}