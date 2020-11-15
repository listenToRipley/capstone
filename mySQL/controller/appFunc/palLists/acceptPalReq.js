const mysql = require('mysql')
const pool = require('../../../sql/connection')
const {handleSQLError} = require('../../../sql/error')

//PUT
//this path should only be available for the viewPendingReq, so the pending mean the current using has the pal role on the table.  
const acceptPalReq = (req, res, next) => {

//since the information should already be based as the key from the view requests and this action should only be turned on where the use is listed as the pal. 
const { reqId } = req.body

//this will be triggered by the pal role accepting, so all references to the pal will be the current user -> we should already know that the reqId is, so we should be able to pull information that way
let sql='UPDATE palListsRequests SET approved=1, active=0 WHERE palRequestId= ? '

sql=mysql.format(sql,[reqId])

pool.query(sql, (err, res) => {
  if (err) return handleSQLError(res, err)
  return res.status(204).json();
})
 next()
}

const updateRequesterAccess = (req, res, next) => {

  let sql = 'INSERT INTO access (username, pantry, pantryRole, shopList, shopListRole ,palReq) VALUES ( ?, (SELECT DISTINCT pS.pantrySettingId FROM pantriesSettings AS pS JOIN palListsRequests AS pLR ON pS.owner=pLR.requesterUser WHERE pLR.requesterUser=(SELECT requesterUser FROM palListsRequests WHERE palRequestId= ? ) ), 5, (SELECT DISTINCT sLS.shopListSetId FROM shopListsSettings AS sLS JOIN palListsRequests AS pLR ON sLS.owner=pLR.requesterUser WHERE pLR.requesterUser=(SELECT requesterUser FROM palListsRequests WHERE palRequestId= ? )),5 , ? )'

  sql=mysql.format(sql,[req.user, reqId, reqId, reqId])

pool.query(sql, (err, res) => {
  if (err) return handleSQLError(res, err)
  next()
})
 
}

const addToRequesterPalList = (req, res, next) => {

  let sql = 'INSERT INTO palLists (palList, username, reqId) VALUES ((SELECT palListSettingsId FROM palListsSettings WHERE owner=(SELECT requesterUser from palListsRequests WHERE palRequestId= ? )), ? , ? )'

  sql=mysql.format(sql,[ reqId, req.user, reqId ])

  pool.query(sql, (err, res) => {
    if (err) return handleSQLError(res, err)
    next()
  })
   
}


const addPalAccess = (req, res, next) => {

  let sql = 'INSERT INTO access (username, pantry, pantryRole ,shopList, shopListRole, palReq) VALUES ( (SELECT requesterUser FROM palListsRequests WHERE palRequestId= ? ), (SELECT pantrySettingId FROM pantriesSettings WHERE owner= ? ), 5, (SELECT shopListSetId FROM shopListsSettings WHERE owner= ? ), 5, ?)'

  sql=mysql.format(sql,[reqId, req.user, req.user, reqId])

  pool.query(sql, (err, res) => {
    if (err) return handleSQLError(res, err)
    next()
  })
   

}

const addToPalsPalList = (req, res, next) => {

  let sql = 'INSERT INTO palLists (palList, username, reqId) VALUES ((SELECT palListSettingsId FROM palListsSettings WHERE owner= ? ), (SELECT requesterUser FROM palListsRequests WHERE palRequestId= ? ) , ? )'

  sql=mysql.format(sql,[req.user, reqId, reqId])

  pool.query(sql, (err, res) => {
    if (err) return handleSQLError(res, err)
    return res.send('YEAH! YOU HAVE A PAL!')
  })
   
}


module.exports = {
  acceptPalReq,
  updateRequesterAccess,
  addToRequesterPalList,
  addPalAccess,
  addToPalsPalList
}