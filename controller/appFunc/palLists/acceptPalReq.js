const mysql = require('mysql')
const pool = require('../../../sql/connection')
const {handleSQLError} = require('../../../sql/error')

const acceptPalReq = (req, res, next) => {

const { reqId } = req.params

let sql='UPDATE palListsRequests SET approved=1, active=0 WHERE palRequestId= ? '

sql=mysql.format(sql,[reqId])

pool.query(sql, (err, results) => {
  if (err) return handleSQLError(res, err)
  next()
})
 
}

const updateRequesterAccess = (req, res, next) => {

  const { reqId } = req.params

  let sql = 'INSERT INTO access (username, pantry, pantryRole, shopList, shopListRole ,palReq) VALUES ( ?, (SELECT DISTINCT pS.pantrySettingId FROM pantriesSettings AS pS JOIN palListsRequests AS pLR ON pS.owner=pLR.requesterUser WHERE pLR.requesterUser=(SELECT requesterUser FROM palListsRequests WHERE palRequestId= ? ) ), 5, (SELECT DISTINCT sLS.shopListSetId FROM shopListsSettings AS sLS JOIN palListsRequests AS pLR ON sLS.owner=pLR.requesterUser WHERE pLR.requesterUser=(SELECT requesterUser FROM palListsRequests WHERE palRequestId= ? )),5 , ? )'

  sql=mysql.format(sql,[req.user, reqId, reqId, reqId])

pool.query(sql, (err, res) => {
  if (err) return handleSQLError(res, err)
  next()
})
 
}

const addToRequesterPalList = (req, res, next) => {
  
  const { reqId } = req.params

  let sql = 'INSERT INTO palLists (palList, username, reqId) VALUES ((SELECT palListSettingsId FROM palListsSettings WHERE owner=(SELECT requesterUser from palListsRequests WHERE palRequestId= ? )), ? , ? )'

  sql=mysql.format(sql,[ reqId, req.user, reqId ])

  pool.query(sql, (err, res) => {
    if (err) return handleSQLError(res, err)
    next()
  })
   
}


const addPalAccess = (req, res, next) => {

  const { reqId } = req.params

  let sql = 'INSERT INTO access (username, pantry, pantryRole ,shopList, shopListRole, palReq) VALUES ( (SELECT requesterUser FROM palListsRequests WHERE palRequestId= ? ), (SELECT pantrySettingId FROM pantriesSettings WHERE owner= ? ), 5, (SELECT shopListSetId FROM shopListsSettings WHERE owner= ? ), 5, ?)'

  sql=mysql.format(sql,[reqId, req.user, req.user, reqId])
 
  pool.query(sql, (err, res) => {
    if (err) return handleSQLError(res, err)
    next()
  })

}

const addToPalsPalList = (req, res, next) => {

  const { reqId } = req.params

  let sql = 'INSERT INTO palLists (palList, username, reqId) VALUES ((SELECT palListSettingsId FROM palListsSettings WHERE owner= ? ), (SELECT requesterUser FROM palListsRequests WHERE palRequestId= ? ) , ? )'

  sql=mysql.format(sql,[req.user, reqId, reqId])

  pool.query(sql, (err, results) => {
    if (err) return handleSQLError(res, err)
    return res.send('YEAH! YOU HAVE A NEW PAL!')
  })
   
}


module.exports = {
  acceptPalReq,
  updateRequesterAccess,
  addToRequesterPalList,
  addPalAccess,
  addToPalsPalList
}