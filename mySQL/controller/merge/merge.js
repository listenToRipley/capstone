const mysql = require('mysql')
const pool = require('../../sql/connection')
const {handleSQLError} = require('../../sql/error')
//items related to merges 

//GET
const mergeStatus = (req, res) => {
  console.log('return the status of the user`s merge')
//write a query that returns the merge status of the current user  -
  //call on table palList, appInfo, mergeRequest 
  //the mergerRequester or mergePal = to username
}

const mergeAll = (req, res) => {

}

//this is future state
const mergePantry = (req, res) => {
  console.log('return the merged pantry and the co-owner and your primary pantry')
}

const mergedShopList = (req, res) => {
  console.log('return the shopping list as the co-owner as your primary pantry') 
}

//POST
const sendMergeReq = (req, res) => {
  console.log('send a merge')
//write a query that send a merge request
  //call on mergeRequest
  //remember the requesters will the one who whose pantry will now be the primary owner and the person who requests will be come the co-owner. 
  //the person who send this will have the role of requesters, to req.params.username is already there


}

const acceptMergeReq = (req, res) => {
  console.log('accept merge request')
//write a query that accepts a merge 
//call on tables mergeRequest, palList
//remember the requesters will the one who whose pantry will now be the primary owner and the person who requests will be come the co-owner. 
  //must update the role if the merge request is approved. will become co-owner 
  const {pal} = req.body
  const {username} = req.params
//write a query for approving or rejects a request 
sql='INSERT INTO mergeRequests (requester, mergePal, palReq) VALUES (?, ? , (SELECT palRequestId FROM palListsRequests WHERE requesterUser=?  AND pal= ? OR requesterUser= ? AND pal=? ))'

sql=mysql.format(sql,[ username, pal, pal, username, username, pal ])

pool.query(sql, (err, results) => {
  if(err) return handleSQLError(res, err)
  return res.json( { newId: results.insertId} ); //double check this
})  

}

const declineMergeReq = (req, res) => {
  console.log('decline merge request')
//write query that decline a merge 
}

//PUT
const reverseMerge = (req, res) => {
  console.log('reverse request')
//write a query that reverses that request 
//the merge can be reversed by either the owner or co owner. 
//a copy of the pantry should be made to the previous co-owner and their owning primary list should be reactivated 
}

module.exports = {
  mergeStatus,
  mergeAll,
  mergePantry, 
  mergedShopList,
  sendMergeReq,
  acceptMergeReq,
  declineMergeReq,
  reverseMerge
}