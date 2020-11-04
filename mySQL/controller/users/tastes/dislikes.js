const mysql = require('mysql')
const pool = require('../../../sql/connection')
const { handleSQLError } = require('../../../sql/error')

//GET
const justDislikes = (req, res) => {
  console.log('this is just your dislikes')

  let sql='SELECT dislikeId AS id, item, spoonId FROM dislikes WHERE active=1 AND username=?'

  sql=mysql.format(sql,[req.params.user])

  pool.query(sql, (err, row) => {
    if(err) return handleSQLError(res, err)
    return res.json(row); 
  })  

} 

//POST
const addDislike = (req, res) => {
  console.log('you have now added a like')

  const {item, spoon} = req.body
  const {user} = req.params

  let sql='INSERT INTO dislikes (username, item, spoonId) VALUES (?, ?, ?)'

  sql=mysql.format(sql,[ user, item, spoon])

  pool.query(sql, (err, results) => {
    if(err) return handleSQLError(res, err)
    return res.json( { newId: results.insertId} ); //double check this
  })  

}

//PUT
const removeDislike = (req, res) => {
  console.log('you have now removed a like from this user')
  const { entryId, user} = req.params

  let sql='UPDATE dislikes SET active=0 WHERE dislikeId=? AND username=?'

  sql=mysql.format(sql,[entryId, params])

  pool.query(sql, (err, results) => {
    if (err) return handleSQLError(res, err)
    return res.status(204).json();
  })
}


module.exports = {
 justDislikes,
 addDislike, 
 removeDislike
}