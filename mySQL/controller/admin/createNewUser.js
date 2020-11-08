const mysql = require('mysql')
const pool = require('../../sql/connection')
const { handleSQLError } = require('../../sql/error')
const bcrypt = require('bcrypt')
const saltRounds = 10;


//should my post and put get rerouted to the calls so we can see the updates? 

const verifyUsername = (req, res, next) => {
  //make sure there isn't someone with the same username 

  let sql = 'SELECT COUNT(username) FROM appInfo WHERE active=1 AND username= ? ORDER BY username;'

  sql = mysql.format(sql, [req.body.user])
    pool.query (sql, (err, row ) => {
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

  let sql = 'SELECT COUNT(email) FROM appInfo WHERE active=1 AND email= ? ORDER BY email; '

  sql = mysql.format(sql, [req.body.email])
  
  pool.query(sql, (err, row) => {
    if (err) return handleSQLError(res, err)

    if(res.json(row)>0) {
      res.send('Sorry, you seem to already have a login.') //should get reroute to create a login 
    } else {
      next()
    }
  })
}

//should each of these be broken down into their own queries and run separately using next? 
const createUser = (req, res, next) => {
  const { username, password, email, firstName, lastName, dobMonth, dobDate, dobYear} = req.body
  //look at the display preferences all and see if we can use similar function for inserting into tables 
  bcrypt.hash(password, saltRounds, (err, hash) => {
    let sql=	'INSERT INTO `appInfo` (username, password, email ) VALUES (? ,?, ?); INSERT INTO `usersDetails` (username, firstName, lastName, dobMonth, dobDate, dobYear, signedUp) VALUES (?, ?, ?, ?, ?, ?, NOW()); INSERT INTO `usersDisplayPreferences` (username) VALUES (?); INSERT INTO `pantriesSettings` (owner) VALUES (?); INSERT INTO `shopListsSettings` (owner) VALUES (?); INSERT INTO `palListsSettings` (owner) VALUES (?); INSERT INTO `usersLocations` (username) VALUES (?); INSERT INTO `access` (username, pantry, pantryRole, shopList, shopListRole) VALUES (?,(SELECT pantrySettingId FROM pantriesSettings WHERE owner=?), 2, (SELECT shopListSetId FROM shopListsSettings WHERE owner=?), 2);'

    //there are a lot of entries that inputs that are repeated, is there a way to only use it once instead of having to have the same input over and over again?
  
    sql = mysql.format(sql, [username, hash, email, firstName, lastName, dobMonth, dobDate, dobYear, username, username, username, username, username, username, username])
  
    pool.query(sql, (err, results) => {
      if(err) return handleSQLError(res, err)
      return res.json({ username: results.username, email: results.email}); //need to verify this
    })  
  })

  next ()

}


module.exports = {
  verifyUsername,
  verifyEmail, 
  createUser
}