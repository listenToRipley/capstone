const mysql = require('mysql')
const pool = require('../../sql/connection')
const { handleSQLError } = require('../../sql/error')

//GET
const allUsers = (req, res) => {
  
  let sql= 'SELECT aI.username, uD.firstName, aI.email, aI.active, uD.signedUp FROM appInfo AS aI JOIN usersDetails AS uD ON aI.username=uD.username WHERE aI.active=1'

  sql= mysql.format(sql, [req.params.user])

  pool.query(sql, (err, rows) => {
    if(err) return handleSQLError(res, err)
    return res.json(rows); 
  })
}

const searchUsers = (req, res) => {
  
  let {find} = req.body

  let sql= 'SELECT aI.username, uD.firstName, aI.email, aI.active, uD.signedUp FROM appInfo AS aI JOIN usersDetails AS uD ON aI.username=uD.username WHERE aI.active=1 AND aI.username LIKE ? OR aI.email LIKE ? '

  sql= mysql.format(sql, [find, find])

  pool.query(sql, (err, rows) => {

    if(err) return handleSQLError(res, err)
    return res.json(rows); 
  })
}

const allAllergies = (req, res) => {
  //drop down for allergies
  
    pool.query('SELECT * FROM allergies', (err, rows) => {
      if (err) return handleSQLError(res, err)
      return res.json(rows);
    })
  }
  
const allDiets = (req, res) => {
  //drop down for diet
  
    pool.query('SELECT * FROM diets', (err, rows) => {
      if (err) return handleSQLError(res, err)
      return res.json(rows);
    })
  }

//POST
const addMeasurement = (req, res) => {
  console.log('you have now added a unit of measurement')
  //call on table measurements 
  const {short, size} = req.body

  let sql='INSERT INTO measurements (short, size) VALUES (UPPER(?),?)'
  sql=mysql.format(sql,[short, size])
  pool.query(sql, (err, results) => {
    if(err) return handleSQLError(res, err)
    return res.json({newId: results.insertId});
  })
}

const addAllergy = (req, res) => {
  console.log('you have now added an allergy to your list')
  //call on table allergies
  let sql='INSERT INTO allergies (allergy) VALUES (?)'
  sql=mysql.format(sql,[req.body.allergy])
  pool.query(sql, (err, results => {
    if(err) return handleSQLError(res, err)
    return res.json( { newId: results.insertId} );
  }))
}

const addDiet = (req, res) => {
  console.log('you have now added a new diet')
  //add new table diets
  let sql='INSERT INTO diets (diet) VALUES (?)'
  sql=mysql.format(sql,[req.body.diet])
  pool.query(sql, (err, results) => {
    if(err) return handleSQLError(res, err)
    return res.json( { newId: results.insertId} );
  })
}


//PUT

module.exports = {
  allUsers,
  searchUsers,
  allAllergies, 
  allDiets,
  addMeasurement,
  addAllergy,
  addDiet
 }