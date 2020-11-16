const mysql = require('mysql')
const pool = require('../../../sql/connection')
const {handleSQLError} = require('../../../sql/error')

//POST
const sendMergeReq = (req, res) => {
  //remember the requesters will the one who whose pantry will now be the primary owner and the person who requests will be come the co-owner. 
  //the person who send this will have the role of requesters, to req.user is already there
  const {pal} = req.body

  let sql='INSERT INTO mergeRequests (requester, mergePal, palReq) VALUES (?, ? , (SELECT palRequestId FROM palListsRequests WHERE requesterUser=? AND pal=? OR requesterUser=? AND pal=? ))'

  sql=mysql.format(sql,[ req.user, pal, pal, req.user, req.user, pal ])
  
  pool.query(sql, (err, results) => {
    if(err) return handleSQLError(res, err)
    return res.json( { newId: results.insertId} ); //double check this
  })    

}

//PUT

const declineMergeReq = (req, res) => {
  console.log('decline merge request')
//write query that decline a merge 
 let sql ='UPDATE mergeRequests SET active=0, approved=0 WHERE mergeReqId=?'

 sql=mysql.format(sql, [req.params.mergeId])

 pool.query(sql, (err, res) => {
  if (err) return handleSQLError(res, err)
  return res.status(204).json();
})

}

module.exports = {
  sendMergeReq,
  declineMergeReq,
}