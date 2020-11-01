//this will be all queries used if the individual is the owner of the pantry 
const mysql = require('mysql')
const pool = require('../../sql/connection')
const { handleSQLError } = require('../../sql/error')

const myPantry = (req, res) => {
  let sql = 'SELECT * FROM shopListsSettings WHERE owner = ?'

  sql=mysql.format(sql, [req.params.username])

  pool.query(sql, (err, row) => {
    if(err) return handleSQLError(res, err)
    return res.json(row); 
  })  
  
}



module.exports = {
  myPantry
}