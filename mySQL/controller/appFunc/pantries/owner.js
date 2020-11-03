//this will be all queries used if the individual is the owner of the pantry 
const mysql = require('mysql')
const pool = require('../../../sql/connection')
const { handleSQLError } = require('../../../sql/error')

//GET


const myPantryContents = (req, res) => {
  let sql = 'SELECT * FROM pantries WHERE pantry=(SELECT pantrySettingId FROM pantriesSettings WHERE owner= ? )'

  sql=mysql.format(sql, [req.params.username])

  pool.query
}

//POST
const myPantryAdd = (req, res) => {

  const {quantity, measId, item, spoonId} = req.body

  let sql = 'INSERT INTO pantries (pantry, quantity, measId, item, spoonId) VALUES ( (SELECT pantrySettingId FROM pantriesSettings WHERE owner= ?), ? , ?, ?, ?)'

  sql=mysql.format(sql, [req.params.username, quantity, measId, item, spoonId ])
}

//PUT



module.exports = {
  myPantryDetails,
  myPantryContents
}