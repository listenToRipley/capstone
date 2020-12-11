const mysql = require('mysql')
const pool = require('../../../sql/connection')
const {handleSQLError} = require('../../../sql/error')

const sendMergeReq = (req, res) => {

  const {pal} = req.body

  let sql='INSERT INTO mergeRequests (requester, mergePal, palReq) VALUES (?, ? , (SELECT palRequestId FROM palListsRequests WHERE requesterUser=? AND pal=? OR requesterUser=? AND pal=? ))'

  sql=mysql.format(sql,[ req.user, pal, pal, req.user, req.user, pal ])
  
  pool.query(sql, (err, results) => {
    if(err) return handleSQLError(res, err)
    return res.json( { newId: results.insertId} ); 
  })    

}

//PUT

const declineMergeReq = (req, res) => {

 let sql ='UPDATE mergeRequests SET active=0, approved=0 WHERE mergeReqId=?'

 sql=mysql.format(sql, [req.params.mergeId])

 pool.query(sql, (err, results) => {
  if (err) return handleSQLError(res, err)
  return res.status(204).json();
})

}

module.exports = {
  sendMergeReq,
  declineMergeReq,
}