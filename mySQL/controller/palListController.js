const mysql = require('mysql')
const pool = require('../sql/connection')
const {handleSQLError} = require('../sql/error')
//this will pull on the pals lists 
//all will pull from pals lists 

//GET
const myPalList = (req, res) => {
  console.log('get the pal list of the current user ')
//write a query the returns all the friends on the list of the current user
let sql = 'SELECT palListName FROM palListsSettings WHERE owner=?'

sql=mysql.format(sql, [req.params.owner])

pool.query(sql, (err, row) => {
  if(err) handleSQLError(res, err)
  return res.json(row)
})

}

const viewSentReq = () => {
  //this is for request send by the current user. 
  sql='SELECT pal FROM palListsRequests WHERE active=1 AND requesterUser=?'

  sql=mysql.format(sql, [req.params.username])

  pool.query(sql, (err, row) => {
    if(err) handleSQLError(res, err)
    return res.json(row)
  })
}

const viewPendingReq = () => {
  //this are request sent by another user and can be approved.
  sql='SELECT requesterUser FROM palListsRequests WHERE active=1 AND pal=?'

  sql.mysql.format(sql, [req.params.username])

  pool.query(sql, (err, row) => {
    if(err) handleSQLError(res, err)
    return res.json(row)
  })
  
}

//POST
const sendPalReq = (req, res) => {
  console.log('send a request to become friends ')
//write a query for approving or rejects a request 
sql='INSERT INTO palListsRequests (requesterUser, pal) VALUES (?, ?)'

sql=mysql.format(sql, (err, row) => {
  if(err) handleSQLError(res, err)
  return res.json(row)
})

}

const blockPal = (req, res) => {
  console.log('block a user')
//write a query for blocking a user 
}

//PUT
const acceptPalReq = (req, res) => {
  console.log('accept a pal request')
//write a query that accepts a pal req
}

const declinePalReq = (req, res) => {
  console.log('decline a pal request')
//write a query that decline a pal request
}

const unblockPal = (req, res) => {
  console.log('unblock a user')
//write a query for blocking a user 
}

const updatePalListName = (req, res) => {
  console.log('update the list name  now')
  //write a query to update the users palListName
  sql='UPDATE palListsSettings SET palListName=? WHERE owner=?'

  sql=mysql.format(sql, [req.body.name], [req.body.owner])

  pool.query(sql, (err, results) => {
    if(err) return handleSQLError(res, err)
    return res.json({newId: results.insertId});
  })

}

const updatePalRole = (req, res) => {
  console.log('you have update what the pal can do on your list')

}


module.exports = {
  myPalList,
  viewSentReq,
  viewPendingReq,
  sendPalReq,
  acceptPalReq,
  declinePalReq,
  blockPal,
  unblockPal,
  updatePalListName,
  updatePalRole
}