const mysql = require('mysql')
const pool = require('../../sql/connection')
const { handleSQLError } = require('../../sql/error')

//GET
const allUsers = (req, res) => {
  
  let sql= 'SELECT aI.username, uD.firstName, aI.email, aI.active, uD.signedUp FROM appInfo AS aI JOIN usersDetails AS uD ON aI.username=uD.username JOIN usersDisplayPreferences AS uDP ON aI.username=uDP.username WHERE aI.active=1 AND uDP.private=0'

  sql= mysql.format(sql, [])

  pool.query(sql, (err, rows) => {
    if(err) return handleSQLError(res, err)
    return res.json(rows); 
  })
}

const searchUsers = (req, res) => {
  
  let {find} = req.body

  let sql= 'SELECT aI.username, uD.firstName, aI.email, aI.active, uD.signedUp FROM appInfo AS aI JOIN usersDetails AS uD ON aI.username=uD.username JOIN usersDisplayPreferences AS uDP ON aI.username=uDP.username WHERE aI.active=1 AND uDP.private=0 AND aI.username LIKE ? OR aI.email LIKE ?'

  sql= mysql.format(sql, [find, find])

  pool.query(sql, (err, rows) => {

    if(err) return handleSQLError(res, err)
    return res.json(rows); 
  })
}

const allAllergies = (req, res) => {
  
    pool.query('SELECT * FROM allergies', (err, rows) => {
      if (err) return handleSQLError(res, err)
      return res.json(rows);
    })
  }
  
const allDiets = (req, res) => {
  
    pool.query('SELECT * FROM diets', (err, rows) => {
      if (err) return handleSQLError(res, err)
      return res.json(rows);
    })
  }

//POST
const addMeasurement = (req, res) => {

  const {short, size} = req.body

  let sql='INSERT INTO measurements (short, size) VALUES (UPPER(?),?)'

  sql=mysql.format(sql,[short, size])

  pool.query(sql, (err, results) => {
    if(err) return handleSQLError(res, err)
    return res.json({newMeasId: results.insertId});
  })
}

const addAllergy = (req, res) => {

  let sql='INSERT INTO allergies (allergy) VALUES (?)'

  sql= mysql.format(sql, [req.body.allergy])

  pool.query(sql, (err, results) => {
    
    if(err) return handleSQLError(res, err)
    return res.json( { newAllergyId: results.insertId} );
  })
}

const addDiet = (req, res) => {

  let sql='INSERT INTO diets (diet) VALUES (?)'
  sql=mysql.format(sql,[req.body.diet])

  pool.query(sql, (err, results) => {
    if(err) return handleSQLError(res, err)
    return res.json( { newDietId: results.insertId} );
  })
}

module.exports = {
  allUsers,
  searchUsers,
  allAllergies, 
  allDiets,
  addMeasurement,
  addAllergy,
  addDiet
 }