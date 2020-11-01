//this will be all queries used if the individual is the owner of the pantry 
const mysql = require('mysql')
const pool = require('../../sql/connection')
const { handleSQLError } = require('../../sql/error')

const myPantryDetails = (req, res) => {
  let sql = 'SELECT * FROM pantriesSettings WHERE owner= ?'

  sql=mysql.format(sql, [req.params.username])

  pool.query(sql, (err, row) => {
    if(err) return handleSQLError(res, err)
    return res.json(row); 
  })  
  
}

const myPantryContents = (req, res) => {
  let sql = 'SELECT * FROM pantries WHERE pantry=(SELECT pantrySettingId FROM pantriesSettings WHERE owner= ? )'

  sql=mysql.format(sql, [req.params.username])

  pool.query
}



module.exports = {
  myPantryDetails,
  myPantryContents
}