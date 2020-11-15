const mysql = require('mysql')
const pool = require('../../../sql/connection')
const { handleSQLError } = require('../../../sql/error')


//GET
const justAllergies = (req, res) => {

  let sql='SELECT al.allergy, al.spoonId FROM  usersAllergies AS uAl JOIN allergies AS al ON uAl.allergy=al.allergyId WHERE uAl.active=1 AND uAl.username=?'

  sql=mysql.format(sql,[req.user])

  pool.query(sql, (err, row) => {
    if(err) return handleSQLError(res, err)
    return res.json(row); 
  })  

}

//POST

const addAllergy = (req, res) => {
  console.log('you have now added a like')

  const { allergyId } = req.body

  let sql='INSERT INTO usersAllergies (username, allergy) VALUES (?, ?); '

  sql=mysql.format(sql, [ req.user, allergyId])

  pool.query(sql, (err, results) => {
    if(err) return handleSQLError(res, err)
    return res.json( { newId: results.insertId} ); //double check this
  })  

}


//PUT 
const removeAllergy = (req, res) => {
  console.log('you have now removed a like from this user')

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