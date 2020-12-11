const mysql = require('mysql')
const pool = require('../../../sql/connection')
const {handleSQLError} = require('../../../sql/error')

const viewSentReq = (req, res) => {

  sql='SELECT palRequestId, pal FROM palListsRequests WHERE active=1 AND requesterUser=?'

  sql=mysql.format(sql, [req.user])

  pool.query(sql, (err, row) => {
    if(err) handleSQLError(res, err)
    return res.json(row)
  })
}

const viewPendingReq = (req, res) => {

  sql='SELECT palRequestId, requesterUser FROM palListsRequests WHERE active=1 AND pal=?'

  sql=mysql.format(sql, [req.user])

  pool.query(sql, (err, row) => {
    if(err) handleSQLError(res, err)
    return res.json(row)
  })
  
}


const sendPalReq = (req, res) => {

  const {askingUser } = req.body

sql='INSERT INTO palListsRequests (requesterUser, pal) VALUES (?, ?)'

sql=mysql.format(sql,[req.user, askingUser ])

pool.query(sql, (err, results) => {
  if(err) return handleSQLError(res, err)
  return res.json( { palRequestId: results.insertId} )
})  

}


const declinePalReq = (req, res) => { 

const {reqId} = req.body

let sql='UPDATE palListsRequests SET approved=0, active=0 WHERE palRequestId=?'

sql= mysql.format(sql, [reqId])

pool.query(sql, (err, results) => {
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