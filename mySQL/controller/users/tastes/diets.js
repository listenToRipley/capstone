const mysql = require('mysql')
const pool = require('../../../sql/connection')
const { handleSQLError } = require('../../../sql/error')

//GET
const justDiets = (req, res) => {
  console.log('this is just your diets')

  let sql='SELECT uD.uDietId AS id, d.diet FROM usersDiets AS uD JOIN diets AS d ON uD.diet=d.dietId WHERE uD.active=1 AND uD.username=?'

  sql=mysql.format(sql,[req.params.username])

  pool.query(sql, (err, row) => {
    if(err) return handleSQLError(res, err)
    return res.json(row); 
  })  

} 

//POST

const addDiet = (req, res) => {
  console.log('you have now added a like')

  const {dietId} = req.body

  let sql='INSERT INTO usersDiets (username, diet) VALUES (?, ?)'

  sql=mysql.format(sql,[ req.params.username ,dietId])

  pool.query(sql, (err, row) => {
    if(err) return handleSQLError(res, err)
    return res.json(row); 
  })  

}

//PUT

const removeDiet = (req, res) => {
  console.log('you have now removed a like from this user')

  let sql='UPDATE usersDiets SET active=0 WHERE uDietId=? AND username=?'

  sql=mysql.format(sql,[req.params.id, req.params.username])

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