const mysql = require('mysql')
const pool = require('../../sql/connection')
const { handleSQLError } = require('../../sql/error')
const bcrypt = require('bcrypt');
const saltRounds = 10;


//should my post and put get rerouted to the calls so we can see the updates? 

const verifyUsername = (req, res, next) => {
  //make sure there isn't someone with the same username 

  let sql = 'SELECT COUNT(username) FROM appInfo WHERE active=1 AND username= ? ORDER BY username;'

  sql = mysql.format(sql, [req.params.user])
    pool.query (sql, (err, row ) => {
    if (err) return handleSQLError(res, err)
      let total = row[0]['COUNT(username)']
    if(total!==0) {
      res.send('The username is already taken, please find another')
    } else {
      res.send(`Username ${req.params.user} is not taken`)
    }
  })
}


const verifyEmail = (req, res, next) => {
  //make sure the person creating this login doesn't already have a login

  let sql = 'SELECT COUNT(email) FROM appInfo WHERE active=1 AND email= ? ORDER BY email; '

  sql = mysql.format(sql, [req.params.email])
  
  pool.query(sql, (err, row) => {
    if (err) return handleSQLError(res, err)
    let total = row[0]['COUNT(email)']
    if(total!==0) {
      res.send('Sorry, you seem to already have a login.') //should get reroute to create a login 
    } else {
      res.send('You are go to create this profile')
    }
  })
}

//should each of these be broken down into their own queries and run separately using next? 
const createUser = (req, res) => {
  
  res.setHeader('Content-Type', 'application/json')

  const { username, password, email, username2,firstName, lastName, dobMonth, dobDate, dobYear, username3, username4, username5, username6, username7, username8, username9, username10} = req.body
  //look at the display preferences all and see if we can use similar function for inserting into tables 
  bcrypt.hash(password, saltRounds, (err, hash) => {

    let sql=	`BEGIN;INSERT INTO appInfo (username, password, email ) VALUES (? ,?, ?);  INSERT INTO usersDetails (username, firstName, lastName, dobMonth, dobDate, dobYear, signedUp) VALUES (?, ?, ?, ?, ?, ?, NOW()); INSERT INTO usersDisplayPreferences (username) VALUES (?); INSERT INTO pantriesSettings (owner) VALUES (?); INSERT INTO shopListsSettings (owner) VALUES (?); INSERT INTO palListsSettings (owner) VALUES (?); INSERT INTO usersLocations (username) VALUES (?); INSERT INTO access (username, pantry, pantryRole, shopList, shopListRole) VALUES (?,(SELECT pantrySettingId FROM pantriesSettings WHERE owner=?), 2, (SELECT shopListSetId FROM shopListsSettings WHERE owner=?), 2); COMMIT`;
  
    sql = mysql.format(sql, [username, hash, email, username2,firstName, lastName, dobMonth, dobDate, dobYear, username3, username4, username5, username6, username7, username8, username9, username10])
  
    pool.query(sql, (err, results) => {
      if(err) return handleSQLError(res, err)
      return res.json(`Congratulations, you are now a Pantry Pal Member!!`); //need to verify this
    })  
  })

}


module.exports = {
  verifyUsername,
  verifyEmail, 
  createUser
}