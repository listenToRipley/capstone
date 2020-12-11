const mysql = require('mysql')
const pool = require('../../sql/connection')
const { handleSQLError } = require('../../sql/error')
const bcrypt = require('bcrypt');
const saltRounds = 10;

const verifyUsername = (req, res, next) => {

  let sql = 'SELECT COUNT(username) FROM appInfo WHERE active=1 AND username= ? ORDER BY username;'

  sql = mysql.format(sql, [req.body.username])
    pool.query (sql, (err, row ) => {
    if (err) return handleSQLError(res, err)
      let total = row[0]['COUNT(username)']
    if(total!==0) {
      res.send('The username is already taken, please find another')
    } else {
      next()
    }
  })
}

const verifyEmail = (req, res, next) => {

  let sql = 'SELECT COUNT(email) FROM appInfo WHERE active=1 AND email= ? ORDER BY email; '

  sql = mysql.format(sql, [req.body.email])
  
  pool.query(sql, (err, row) => {
    if (err) return handleSQLError(res, err)
    let total = row[0]['COUNT(email)']
    if(total!==0) {
      res.send('Sorry, you seem to already have a login.') 
    } else {
      next()
    }
  })
}

const createUsername = (req, res, next) => {

  const { username, password, email } = req.body

  bcrypt.hash(password, saltRounds, (err, hash) => {

    let sql='INSERT INTO appInfo (username, password, email ) VALUES (? ,?, ?);'
  
    sql = mysql.format(sql, [username, hash, email])
  
    pool.query(sql, (err, results) => {
      if(err) return handleSQLError(res, err)
      next()
    })  
  })
  }

const createUserDetails = (req, res, next) => {

  const { username, firstName, lastName, dobMonth, dobDate, dobYear} = req.body

   let sql=	'INSERT INTO usersDetails (username, firstName,lastName, dobMonth, dobDate, dobYear, signedUp) VALUES (?, ?, ?, ?, ?, ?, NOW())'

   sql = mysql.format(sql, [ username, firstName, lastName,dobMonth, dobDate, dobYear ])

   pool.query(sql, (err, results) => {
     if(err) return handleSQLError(res, err)
     next()
   })  
}

const createUserLocation = (req, res, next) => {

   let sql=	'INSERT INTO usersLocations (username) VALUES (?)'

   sql = mysql.format(sql, [ req.body.username])

   pool.query(sql, (err, results) => {
     if(err) return handleSQLError(res, err)
     next()
   })  
}

const createDefaultDisplay = (req, res, next) => {

   let sql=	'INSERT INTO usersDisplayPreferences (username) VALUES (?)'

   sql = mysql.format(sql, [ req.body.username])

   pool.query(sql, (err, results) => {
     if(err) return handleSQLError(res, err)
     next()
   })  

}

const createPantry = (req, res, next) => {

   let sql=	'INSERT INTO pantriesSettings (owner) VALUES (?)'

   sql = mysql.format(sql, [ req.body.username])

   pool.query(sql, (err, results) => {
     if(err) return handleSQLError(res, err)
     next()
   })  
}

const createShoppingList = (req, res, next) => {

   let sql=	'INSERT INTO shopListsSettings (owner) VALUES (?)'

   sql = mysql.format(sql, [ req.body.username])

   pool.query(sql, (err, results) => {
     if(err) return handleSQLError(res, err)
    next()
   })  
  }

const createPalList = (req, res, next) => {

   let sql=	'INSERT INTO palListsSettings (owner) VALUES (?)'

   sql = mysql.format(sql, [req.body.username])

   pool.query(sql, (err, results) => {
     if(err) return handleSQLError(res, err)
     next()
   })  

}

const createUserAccess = (req, res, next) => {

  const {username} = req.body

   let sql=	'INSERT INTO access (username, pantry, pantryRole, shopList, shopListRole) VALUES (?,(SELECT DISTINCT last_insert_id() FROM pantriesSettings), 2, (SELECT DISTINCT last_insert_id() FROM shopListsSettings), 2)'

   sql = mysql.format(sql, [ username])

   pool.query(sql, (err, results) => {
     if(err) return handleSQLError(res, err)
     return res.send(true)
   }) 

}

const newUser = (req, res) => {
  
  const {username} = req.params

  let sql='SELECT aI.username, aI.password, aI.email, uD.firstName, uD.lastName, uD.dobMonth, uD.dobDate, uD.dobYear, uD.signedUp, uL.userLocationId ,uDP.displayPrefId, pS.pantrySettingId, sLS.shopListSetId, pLS.palListSettingsId, a.accessId FROM appInfo AS aI JOIN usersDetails AS uD ON aI.username=uD.username JOIN  usersLocations AS uL ON aI.username=uL.username JOIN usersDisplayPreferences AS uDP ON aI.username=uDP.username JOIN pantriesSettings AS pS ON aI.username=pS.owner JOIN shopListsSettings AS sLS ON aI.username=sLS.owner JOIN palListsSettings AS pLS ON aI.username=pLS.owner JOIN access AS a ON aI.username=a.username WHERE a.pantryRole=2 AND a.shopListRole=2 AND aI.username= ? '

  sql = mysql.format(sql, [ username])

  pool.query(sql, (err, row) => {
    if(err) return handleSQLError(res, err)
    return res.json(row)

  })  
}

module.exports = {
  verifyUsername,
  verifyEmail, 
  createUsername,
  createUserDetails,
  createUserLocation,
  createDefaultDisplay,
  createPantry,
  createShoppingList,
  createPalList,
  createUserAccess,
  newUser
}