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

sql=mysql.format(sql, [req.params.username])

pool.query(sql, (err, row) => {
  if(err) handleSQLError(res, err)
  return res.json(row)
})

}

const viewSentReq = (req, res) => {
  //this is for request send by the current user. 
  sql='SELECT palRequestId AS reqId, pal AS waiting FROM palListsRequests WHERE active=1 AND requesterUser=?'

  sql=mysql.format(sql, [req.params.username])

  pool.query(sql, (err, row) => {
    if(err) handleSQLError(res, err)
    return res.json(row)
  })
}

//this will be associated with the ability to accept! 
const viewPendingReq = (req, res) => {
  //this are request sent by another user and can be approved.
  sql='SELECT palRequestId AS reqId, requesterUser AS replyOn FROM palListsRequests WHERE active=1 AND pal=?'

  sql.mysql.format(sql, [req.params.username])

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

sql=mysql.format(sql,[req.params.username, askingUser ])

pool.query(sql, (err, results) => {
  if(err) return handleSQLError(res, err)
  return res.json( { newId: results.insertId} ); //double check this
})  

}

const blockPal = (req, res) => {
  console.log('block a user')
//write a query for blocking a user 
}

//PUT

//this path should only be available for the viewPendingReq, so the pending mean the current using has the pal role on the table.  
const acceptPalReq = (req, res) => {
  console.log('accept a pal request')
//write a query that accepts a pal req

//since the information should already be based as the key from the view requests and this action should only be turned on where the use is listed as the pal. 
const { reqId } = req.body

//this will be triggered by the pal role accepting, so all references to the pal will be the current user
let sql= 'BEGIN; UPDATE palListsRequests SET approved=1, active=0 WHERE palRequestId= ? ; INSERT INTO access (username, pantry, pantryRole, shopList, shopListRole ,palReq) VALUES ((SELECT pal FROM palListsRequests WHERE palRequestId= ? ), (SELECT DISTINCT pS.pantrySettingId FROM pantriesSettings AS pS JOIN palListsRequests AS pLR ON pS.owner=pLR.requesterUser WHERE pLR.requesterUser=(SELECT requesterUser FROM palListsRequests WHERE palRequestId= ? ) ), 5, (SELECT DISTINCT sLS.shopListSetId FROM shopListsSettings AS sLS JOIN palListsRequests AS pLR ON sLS.owner=pLR.requesterUser WHERE pLR.requesterUser=(SELECT requesterUser FROM palListsRequests WHERE palRequestId= ? )),5 ,  ?);INSERT INTO access (username, pantry, pantryRole ,shopList, shopListRole, palReq) VALUES ( (SELECT requesterUser FROM palListsRequests WHERE palRequestId= ? ), (SELECT DISTINCT pS.pantrySettingId FROM pantriesSettings AS pS JOIN palListsRequests AS pLR ON pS.owner=pLR.pal WHERE pLR.pal=(SELECT pal FROM palListsRequests WHERE palRequestId= ?) ), 5, (SELECT DISTINCT sLS.shopListSetId FROM shopListsSettings AS sLS JOIN palListsRequests AS pLR ON sLS.owner=pLR.pal WHERE pLR.pal=(SELECT pal FROM palListsRequests WHERE palRequestId= ? )), 5,  ?); COMMIT'

sql=mysql.format(sql,[reqId])

pool.query(sql, (err, results) => {
  if (err) return handleSQLError(res, err)
  return res.status(204).json();
})

}

//since the information should already be based as the key from the view requests and this action should only be turned on where the use is listed as the pal. 
const declinePalReq = (req, res) => {
  console.log('decline a pal request')
//write a query that decline a pal request
const {reqId} = req.body

let sql='UPDATE palListsRequests SET approved=0, active=0 WHERE palRequestId=?'

sql= mysql.format(sql, [reqId])

pool.query(sql, (err, results) => {
  if(err) return handleSQLError(res, err)
  return res.status(204).json(); 
})

}

const cancelPalReq = (req, res) => {
  console.log('never mind, I did not want to sent that')
}

const unblockPal = (req, res) => {
  console.log('unblock a user')
//write a query for blocking a user 
}

const updatePalListName = (req, res) => {
  console.log('update the list name  now')
  //write a query to update the users palListName
  sql='UPDATE palListsSettings SET palListName=? WHERE owner=?'

  sql=mysql.format(sql, [req.body.name], [req.body.username])

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
  cancelPalReq,
  blockPal,
  unblockPal,
  updatePalListName,
  updatePalRole
}