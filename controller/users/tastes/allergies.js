const mysql = require('mysql')
const pool = require('../../../sql/connection')
const { handleSQLError } = require('../../../sql/error')



const justAllergies = (req, res) => {

  let sql='SELECT al.allergy, al.spoonId FROM  usersAllergies AS uAl JOIN allergies AS al ON uAl.allergy=al.allergyId WHERE uAl.active=1 AND uAl.username=?'

  sql=mysql.format(sql,[req.user])

  pool.query(sql, (err, row) => {
    if(err) return handleSQLError(res, err)
    return res.json(row); 
  })  

}


const addAllergy = (req, res) => {

  const { allergyId } = req.body

  let sql='INSERT INTO usersAllergies (username, allergy) VALUES (?, ?); '

  sql=mysql.format(sql, [ req.user, allergyId])

  pool.query(sql, (err, results) => {
    if(err) return handleSQLError(res, err)
    return res.json( { allergyId: results.insertId} )
  })  

}


const removeAllergy = (req, res) => {

  const { entryId } = req.params

  let sql='UPDATE usersAllergies SET active=0 WHERE uAllergyId=? AND username=?'

  sql=mysql.format(sql,[entryId, req.user])

  pool.query(sql, (err, results) => {
    if (err) return handleSQLError(res, err)
    return res.status(204).json();
  })

}

module.exports = {
  justAllergies,
  addAllergy,
  removeAllergy
}