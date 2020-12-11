const mysql = require('mysql')
const pool = require('../../../sql/connection')
const { handleSQLError } = require('../../../sql/error')


const justDiets = (req, res) => {

  let sql='SELECT uD.uDietId AS id, d.diet FROM usersDiets AS uD JOIN diets AS d ON uD.diet=d.dietId WHERE uD.active=1 AND uD.username=?'

  sql=mysql.format(sql,[req.user])

  pool.query(sql, (err, row) => {
    if(err) return handleSQLError(res, err)
    return res.json(row); 
  })  

} 


const addDiet = (req, res) => {

  const {dietId} = req.body

  let sql='INSERT INTO usersDiets (username, diet) VALUES (?, ?)'

  sql=mysql.format(sql,[ req.user, dietId])

  pool.query(sql, (err, results) => {
    if(err) return handleSQLError(res, err)
    return res.json( { dietId: results.insertId} )
  })  

}


const removeDiet = (req, res) => {

  const {entryId} = req.params

  let sql='UPDATE usersDiets SET active=0 WHERE uDietId=? AND username=?'

  sql=mysql.format(sql,[entryId, req.user])

  pool.query(sql, (err, results) => {
    if (err) return handleSQLError(res, err)
    return res.status(204).json();
  })
}


module.exports = {
  justDiets,
  addDiet,
  removeDiet
}