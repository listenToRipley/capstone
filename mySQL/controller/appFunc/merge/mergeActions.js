const mysql = require('mysql')
const pool = require('../../../sql/connection')
const {handleSQLError} = require('../../../sql/error')

//POST
const sendMergeReq = (req, res) => {
  console.log('send a merge')
//write a query that send a merge request
  //call on mergeRequest
  //remember the requesters will the one who whose pantry will now be the primary owner and the person who requests will be come the co-owner. 
  //the person who send this will have the role of requesters, to req.params.username is already there
  const {pal} = req.body
  const {user} = req.params

  let sql='INSERT INTO mergeRequests (requester, mergePal, palReq) VALUES (?, ? , (SELECT palRequestId FROM palListsRequests WHERE requesterUser=?  AND pal= ? OR requesterUser= ? AND pal=? ))'

  sql=mysql.format(sql,[ user, pal, pal, username, username, pal ])
  
  pool.query(sql, (err, results) => {
    if(err) return handleSQLError(res, err)
    return res.json( { newId: results.insertId} ); //double check this
  })    

}

//PUT
const acceptMergeReq = (req, res) => {
  console.log('accept merge request')
//write a query that accepts a merge 
//call on tables mergeRequest, palList
//remember the requesters will the one who whose pantry will now be the primary owner and the person who requests will be come the co-owner. 
  //must update the role if the merge request is approved. will become co-owner 
  const {user, mergeId} = req.params
//write a query for approving or rejects a request 
let sql='BEGIN;UPDATE mergeRequests SET active=0, approved=1 WHERE mergeReqId= ?;UPDATE access SET pantryRole=3, shopListRole=3 WHERE username= ? AND palReq=(SELECT palRequestId FROM palListsRequests WHERE requesterUser= ? AND pal=(SELECT requester FROM mergeRequests WHERE mergeReqId= ? ) OR requesterUser=(SELECT requester FROM mergeRequests WHERE mergeReqId= ? ) AND pal= ? ); UPDATE access SET active=0 WHERE pantryRole=2 AND shopListRole=2 AND username= ? ; UPDATE pantries SET pantry=(SELECT pantrySettingId FROM pantriesSettings WHERE owner=(SELECT requester FROM mergeRequests WHERE mergeReqId= ? )) WHERE pantry=(SELECT pantrySettingId FROM pantriesSettings WHERE owner= ? ); UPDATE shoppingLists SET shopList=(SELECT shopListSetId FROM shopListsSettings WHERE owner=(SELECT requester FROM mergeRequests WHERE mergeReqId= ? )) WHERE shopList=(SELECT shopListSetId FROM shopListsSettings WHERE owner= ? ); UPDATE pantriesSettings SET mergeStatus= ? , active=0 WHERE owner= ? ; UPDATE shopListsSettings SET mergeStatus= ? , active=0 WHERE owner= ? ; UPDATE pantriesSettings SET mergeStatus= ? WHERE owner=(SELECT requester FROM mergeRequests WHERE mergeReqId= ? ); UPDATE shopListsSettings SET mergeStatus= ? WHERE owner=(SELECT requester FROM mergeRequests WHERE mergeReqId= ? ); COMMIT;'

sql=mysql.format(sql,[ mergeId, 
  user, user, 
  mergeId, mergeId, 
  user, user, 
  mergeId, user, 
  mergeId, user, 
  mergeId, user, 
  mergeId, user,
  mergeId, mergeId, mergeId, mergeId ])

pool.query(sql, (err, results) => {
  if(err) return handleSQLError(res, err)
  return res.json( { newId: results.insertId} ); //double check this
})  

}

const declineMergeReq = (req, res) => {
  console.log('decline merge request')
//write query that decline a merge 
 let sql ='UPDATE mergeRequests SET active=0, approved=0 WHERE mergeReqId=?'

 sql=mysql.format(sql, [req.params.mergeId])

 pool.query(sql, (err, results) => {
  if (err) return handleSQLError(res, err)
  return res.status(204).json();
})

}

module.exports = {
  sendMergeReq,
  acceptMergeReq,
  declineMergeReq,
}