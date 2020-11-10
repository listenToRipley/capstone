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

    if(row>0) {
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

    if(row>0) {
      res.send('Sorry, you seem to already have a login.') //should get reroute to create a login 
    } else {
      next()
    }
  })
}

//should each of these be broken down into their own queries and run separately using next? 
const createUsername = (req, res, next) => {
  
  res.setHeader('Content-Type', 'application/json')

  const { username, password, email } = req.body
  //look at the display preferences all and see if we can use similar function for inserting into tables 
  bcrypt.hash(password, saltRounds, (err, hash) => {

    let sql=	'INSERT INTO appInfo (username, password, email ) VALUES (? ,?, ?);'

    //there are a lot of entries that inputs that are repeated, is there a way to only use it once instead of having to have the same input over and over again?
  
    sql = mysql.format(sql, [username, hash, email])
  
    pool.query(sql, (err, results) => {
      if(err) return handleSQLError(res, err)
      return res.send('username and password are good'); //need to verify this
      
    })  
  })
  next()
}

const createUserDetails = (req, res, next) => {
  
  res.setHeader('Content-Type', 'application/json')

  const { username, firstName, lastName, dobMonth, dobDate, dobYear} = req.body

   let sql=	'INSERT INTO usersDetails (username, firstName,lastName, dobMonth, dobDate, dobYear, signedUp) VALUES (?, ?, ?, ?, ?, ?, NOW())'

   sql = mysql.format(sql, [ username, firstName, lastName,dobMonth, dobDate, dobYear ])

   pool.query(sql, (err, results) => {
     if(err) return handleSQLError(res, err)
     return res.send('user details have been added')

   })  

   next()
}

const createDefaultDisplay = (req, res, next) => {
  
  res.setHeader('Content-Type', 'application/json')

   let sql=	'INSERT INTO usersDisplayPreferences (username) VALUES (?)'

   sql = mysql.format(sql, [ req.body.username])

   pool.query(sql, (err, results) => {
     if(err) return handleSQLError(res, err)
     return res.send('your default display settings have been created')

   })  

   next()
}

const createPantry = (req, res, next) => {
  
  res.setHeader('Content-Type', 'application/json')

   let sql=	'INSERT INTO pantriesSettings (owner) VALUES (?)'

   sql = mysql.format(sql, [ req.body.username])

   pool.query(sql, (err, results) => {
     if(err) return handleSQLError(res, err)
     return res.send('your pantry has been created')

   })  

   next()
}


const createShoppingList = (req, res, next) => {
  
  res.setHeader('Content-Type', 'application/json')

   let sql=	'INSERT INTO shopListsSettings (owner) VALUES (?)'

   sql = mysql.format(sql, [ req.body.username])

   pool.query(sql, (err, results) => {
     if(err) return handleSQLError(res, err)
     return res.send('your shoppingList has been created')

   })  

   next()
}


const createPalList = (req, res, next) => {
  
  res.setHeader('Content-Type', 'application/json')

   let sql=	'INSERT INTO palListsSettings (owner) VALUES (?)'

   sql = mysql.format(sql, [ req.body.username])

   pool.query(sql, (err, results) => {
     if(err) return handleSQLError(res, err)
     return res.send('your shoppingList has been created')

   })  

   next()
}


const createUserLocation = (req, res, next) => {
  
  res.setHeader('Content-Type', 'application/json')

   let sql=	'INSERT INTO usersLocations (username) VALUES (?)'

   sql = mysql.format(sql, [ req.body.username])

   pool.query(sql, (err, results) => {
     if(err) return handleSQLError(res, err)
     return res.send('your have create a placeholder for user location information')

   })  

   next()
}

const createUserAccess = (req, res, next) => {
  
  res.setHeader('Content-Type', 'application/json')

  const {username} = req.body

   let sql=	'INSERT INTO access (username, pantry, pantryRole, shopList, shopListRole) VALUES (?,(SELECT pantrySettingId FROM pantriesSettings WHERE owner=?), 2, (SELECT shopListSetId FROM shopListsSettings WHERE owner=?), 2)'

   sql = mysql.format(sql, [ username, username, username])

   pool.query(sql, (err, results) => {
     if(err) return handleSQLError(res, err)
     return res.send('CONGRATULATIONS! YOUR ARE NOW A PANTRY PAL USER!')

   })  

}

module.exports = {
  verifyUsername,
  verifyEmail, 
  createUsername,
  createUserDetails,
  createDefaultDisplay,
  createPantry,
  createShoppingList,
  createPalList,
  createUserLocation,
  createUserAccess
}