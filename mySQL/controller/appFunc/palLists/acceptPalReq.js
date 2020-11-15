const mysql = require('mysql')
const pool = require('../../../sql/connection')
const {handleSQLError} = require('../../../sql/error')
//PUT
//make this its own doc
//this path should only be available for the viewPendingReq, so the pending mean the current using has the pal role on the table.  
const acceptPalReq = (req, res) => {
  console.log('accept a pal request')
//write a query that accepts a pal req

//since the information should already be based as the key from the view requests and this action should only be turned on where the use is listed as the pal. 
const { reqId } = req.body

//this will be triggered by the pal role accepting, so all references to the pal will be the current user -> we should already know that the reqId is, so we should be able to pull information that way
let sql='BEGIN; UPDATE palListsRequests SET approved=1, active=0 WHERE palRequestId= ? ; INSERT INTO access (username, pantry, pantryRole, shopList, shopListRole ,palReq) VALUES ( ?, (SELECT DISTINCT pS.pantrySettingId FROM pantriesSettings AS pS JOIN palListsRequests AS pLR ON pS.owner=pLR.requesterUser WHERE pLR.requesterUser=(SELECT requesterUser FROM palListsRequests WHERE palRequestId= ? ) ), 5, (SELECT DISTINCT sLS.shopListSetId FROM shopListsSettings AS sLS JOIN palListsRequests AS pLR ON sLS.owner=pLR.requesterUser WHERE pLR.requesterUser=(SELECT requesterUser FROM palListsRequests WHERE palRequestId= ? )),5 , ? ); INSERT INTO palLists (palList, username, reqId) VALUES ((SELECT palListSettingsId FROM palListsSettings WHERE owner=(SELECT requesterUser from palListsRequests WHERE palRequestId= ? )), ? , ? ); INSERT INTO access (username, pantry, pantryRole ,shopList, shopListRole, palReq) VALUES ( (SELECT requesterUser FROM palListsRequests WHERE palRequestId= ? ), (SELECT pantrySettingId FROM pantriesSettings WHERE owner= ? ), 5, (SELECT shopListSetId FROM shopListsSettings WHERE owner= ? ), 5, ?); INSERT INTO palLists (palList, username, reqId) VALUES ((SELECT palListSettingsId FROM palListsSettings WHERE owner= ? ), (SELECT requesterUser FROM palListsRequests WHERE palRequestId= ? ) , ? ); COMMIT;'

sql=mysql.format(sql,[reqId, req.user, reqId, reqId, reqId, reqId, user, reqId, reqId, user, user, reqId, user, reqId, reqId ])

pool.query(sql, (err, res) => {
  if (err) return handleSQLError(res, err)
  return res.status(204).json();
})
 next()
}

module.exports = {
  acceptPalReq
}