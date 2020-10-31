const mysql = require('mysql')
const pool = require('../../sql/connection')
const {handleSQLError} = require('../../sql/error')
//this will pull on the pals lists 
//all will pull from pals lists 

//GET
const myPalList = (req, res) => {
  console.log('get the pal list of the current user ')
//NEED TO UPDATE TO INCLUDE THE PAL LIST
let sql = 'SELECT DISTINCT pL.username AS pals, pL.reqId AS palReq, pLS.palListName, a.pantryRole, a.shopListRole FROM palLists AS pL JOIN palListsRequests AS pLR JOIN palListsSettings AS pLS JOIN access AS a ON pLR.palRequestId=pL.reqId AND a.palReq=pL.reqId AND pL.palList=pLS.palListSettingsId WHERE pLR.approved=1 AND a.active=1 AND pLS.owner=?'

sql=mysql.format(sql, [req.params.username])

pool.query(sql, (err, row) => {
  if(err) handleSQLError(res, err)
  return res.json(row)
})

}


const viewSentReq = (req, res) => {
  //this is for request send by the current user. 
  sql='SELECT palRequestId, pal FROM palListsRequests WHERE active=1 AND requesterUser=?'

  sql=mysql.format(sql, [req.params.username])

  pool.query(sql, (err, row) => {
    if(err) handleSQLError(res, err)
    return res.json(row)
  })
}

//this will be associated with the ability to accept! 
const viewPendingReq = (req, res) => {
  //this are request sent by another user and can be approved.
  sql='SELECT palRequestId, requesterUser FROM palListsRequests WHERE active=1 AND pal=?'

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
//this will be future state. 
}

//PUT

//this path should only be available for the viewPendingReq, so the pending mean the current using has the pal role on the table.  
const acceptPalReq = (req, res) => {
  console.log('accept a pal request')
//write a query that accepts a pal req

//since the information should already be based as the key from the view requests and this action should only be turned on where the use is listed as the pal. 
const { reqId } = req.body
const {username } = req.params

//this will be triggered by the pal role accepting, so all references to the pal will be the current user -> we should already know that the reqId is, so we should be able to pull information that way
let sql='BEGIN; UPDATE palListsRequests SET approved=1, active=0 WHERE palRequestId= ? ; INSERT INTO access (username, pantry, pantryRole, shopList, shopListRole ,palReq) VALUES ( ?, (SELECT DISTINCT pS.pantrySettingId FROM pantriesSettings AS pS JOIN palListsRequests AS pLR ON pS.owner=pLR.requesterUser WHERE pLR.requesterUser=(SELECT requesterUser FROM palListsRequests WHERE palRequestId= ? ) ), 5, (SELECT DISTINCT sLS.shopListSetId FROM shopListsSettings AS sLS JOIN palListsRequests AS pLR ON sLS.owner=pLR.requesterUser WHERE pLR.requesterUser=(SELECT requesterUser FROM palListsRequests WHERE palRequestId= ? )),5 , ? ); INSERT INTO palLists (palList, username, reqId) VALUES ((SELECT palListSettingsId FROM palListsSettings WHERE owner=(SELECT requesterUser from palListsRequests WHERE palRequestId= ? )), ? , ? ); INSERT INTO access (username, pantry, pantryRole ,shopList, shopListRole, palReq) VALUES ( (SELECT requesterUser FROM palListsRequests WHERE palRequestId= ? ), (SELECT pantrySettingId FROM pantriesSettings WHERE owner= ? ), 5, (SELECT shopListSetId FROM shopListsSettings WHERE owner= ? ), 5, ?); INSERT INTO palLists (palList, username, reqId) VALUES ((SELECT palListSettingsId FROM palListsSettings WHERE owner= ? ), (SELECT requesterUser FROM palListsRequests WHERE palRequestId= ? ) , ? ); COMMIT;'

sql=mysql.format(sql,[reqId, username, reqId, reqId, reqId, reqId, username, reqId, reqId, username, username, reqId, username, reqId, reqId ])

pool.query(sql, (err, results) => {
  if (err) return handleSQLError(res, err)
  return res.status(204).json();
})

}

//since the information should already be based as the key from the view requests and this action should only be turned on where the use is listed as the pal. 
const declinePalReq = (req, res) => { //USE THIS THIS TO CANCEL REQUESTS
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

const unblockPal = (req, res) => {
  console.log('unblock a user')
//write a query for blocking a user 
//this will be future state
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
  blockPal,
  unblockPal,
  updatePalListName,
  updatePalRole
}