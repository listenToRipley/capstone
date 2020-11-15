const { NextWeek } = require('@material-ui/icons')
const mysql = require('mysql')
const pool = require('../../../sql/connection')
const {handleSQLError} = require('../../../sql/error')

//GET 
const viewSentReq = (req, res) => {
  //this is for request send by the current user. 
  sql='SELECT palRequestId, pal FROM palListsRequests WHERE active=1 AND requesterUser=?'

  sql=mysql.format(sql, [req.user])

  pool.query(sql, (err, row) => {
    if(err) handleSQLError(res, err)
    return res.json(row)
  })
}

//this will be associated with the ability to accept! 
const viewPendingReq = (req, res) => {
  //this are request sent by another user and can be approved.
  sql='SELECT palRequestId, requesterUser FROM palListsRequests WHERE active=1 AND pal=?'

  sql.mysql.format(sql, [req.user])

  pool.query(sql, (err, row) => {
    if(err) handleSQLError(res, err)
    return res.json(row)
  })
  
}

//POST
const sendPalReq = (req, res) => {
  console.log('send a request to become friends ')

  const {askingUser } = req.body
//write a query for approving or rejects a request 
sql='INSERT INTO palListsRequests (requesterUser, pal) VALUES (?, ?)'

sql=mysql.format(sql,[req.user, askingUser ])

pool.query(sql, (err, results) => {
  if(err) return handleSQLError(res, err)
  return res.json( { newId: results.insertId} ); //double check this
})  

}

//PUT

//since the information should already be based as the key from the view requests and this action should only be turned on where the use is listed as the pal. 
const declinePalReq = (req, res) => { //USE THIS THIS TO CANCEL REQUESTS
  console.log('decline a pal request')
//write a query that decline a pal request
const {reqId} = req.body

let sql='UPDATE palListsRequests SET approved=0, active=0 WHERE palRequestId=?'

sql= mysql.format(sql, [reqId])

pool.query(sql, (err, res) => {
  if(err) return handleSQLError(res, err)
  return res.status(204).json(); 
})

}

module.exports = {
  viewPendingReq,
  viewSentReq,
  sendPalReq,
  declinePalReq
}