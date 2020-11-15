const mysql = require('mysql')
const pool = require('../../../sql/connection')
const { handleSQLError } = require('../../../sql/error')

//GET 
const justLikes = (req, res) => {

  let sql='SELECT likeId AS id, item, spoonId FROM likes WHERE active=1 AND username=?'

  sql=mysql.format(sql,[req.user])

  pool.query(sql, (err, row) => {
    if(err) return handleSQLError(res, err)
    return res.json(row); 
  })  

} 

//POST
const addLike = (req, res) => {
  console.log('you have now added a like')

  const {item, spoon} = req.body

  let sql='INSERT INTO likes (username, item, spoonId) VALUES (?, ?, ?)'

  sql=mysql.format(sql,[ req.user , item, spoon])

  pool.query(sql, (err, results) => {
    if(err) return handleSQLError(res, err)
    return res.json( { newId: results.insertId} ); //double check this
  })  

}

//PUT
const removeLike = (req, res) => {
  console.log('you have now removed a like from this user')

  const {entryId} = req.params

  let sql='UPDATE likes SET active=0 WHERE likeId=? AND username=?'

  sql=mysql.format(sql,[entryId, req.user])

  pool.query(sql, (err, results) => {
    if (err) return handleSQLError(res, err)
    return res.status(204).json();
  })
}


module.exports = {
  justLikes,
  addLike,
  removeLike  
}