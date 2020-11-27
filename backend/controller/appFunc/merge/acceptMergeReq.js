const mysql = require('mysql')
const { shallowEqual } = require('react-redux')
const pool = require('../../../sql/connection')
const {handleSQLError} = require('../../../sql/error')

//PUT
const acceptMergeReq = (req, res, next) => {

//remember the requesters will the one who whose pantry will now be the primary owner and the person who requests will be come the co-owner. 
  //must update the role if the merge request is approved. will become co-owner 
  const {mergeId} = req.params

  let sql='UPDATE mergeRequests SET active=0, approved=1 WHERE mergeReqId= ?'

  sql=mysql.format(sql,[ mergeId ])

  pool.query(sql, (err, results) => {
    if(err) return handleSQLError(res, err)
    next()
})  

}

const acceptAccess = (req, res, next) => {

  const {mergeId} = req.params

  let sql='UPDATE access SET pantryRole=3, shopListRole=3 WHERE username= ? AND palReq=(SELECT palRequestId FROM palListsRequests WHERE requesterUser= ? AND pal=(SELECT requester FROM mergeRequests WHERE mergeReqId= ? ) OR requesterUser=(SELECT requester FROM mergeRequests WHERE mergeReqId= ? ) AND pal= ? )'

  sql = mysql.format(sql, [ req.user, req.user, mergeId, mergeId, req.user])

  pool.query(sql, (err, results) => {
    if(err) return handleSQLError(res, err)
    next()
  })
}

const deactivateAccess = (req, res, next) => {

  let sql = 'UPDATE access SET active=0 WHERE pantryRole=2 AND shopListRole=2 AND username= ? '

  sql = mysql.format(sql, [req.user])

  pool.query(sql, (err, results) => {
    if(err) return handleSQLError(res, err)
    next()
  })
}

const copyPantry = (req, res, next) => {

  const {mergeId} = req.params
  
  let sql = 'UPDATE pantries SET pantry=(SELECT pantrySettingId FROM pantriesSettings WHERE owner=(SELECT requester FROM mergeRequests WHERE mergeReqId= ? )) WHERE pantry=(SELECT pantrySettingId FROM pantriesSettings WHERE owner= ? )'

  sql = mysql.format(sql, [mergeId, req.user])

  pool.query(sql, (err, results) => {
    if(err) return handleSQLError(res, err)
    next()
  })
}


const copyShopList = (req, res, next) => {

  const {mergeId} = req.params

  let sql = 'UPDATE shoppingLists SET shopList=(SELECT shopListSetId FROM shopListsSettings WHERE owner=(SELECT requester FROM mergeRequests WHERE mergeReqId= ? )) WHERE shopList=(SELECT shopListSetId FROM shopListsSettings WHERE owner= ? )'

  sql = mysql.format(sql, [mergeId, req.user ])

  pool.query(sql, (err, results) => {
    if(err) return handleSQLError(res, err)
    next()
  })
}

//future state, need to verify all people on merge pal's friend's list are currently on requesters list. 
const updatePalsListAccess = (req, res, next) => {

  const {mergeId} = req.params

  let sql = 'UPDATE access SET shopList=(SELECT shopListSetId FROM shopListsSettings WHERE owner=(SELECT requester FROM mergeRequests WHERE mergeReqId=?)) , pantry=(SELECT pantrySettingId FROM pantriesSettings WHERE owner=(SELECT requester FROM mergeRequests WHERE mergeReqId=? )) WHERE palReq=(SELECT palRequestId FROM palListsRequests WHERE approved=1 AND pal=? OR requesterUser=?)'

  sql = mysql.format(sql, [mergeId, mergeId, req.user, req.user])

  pool.query(sql, (err, results) => {
    if(err) return handleSQLError(res, err)
    next()
  })
}


const deactivatePantry = (req, res, next) => {

  const {mergeId} = req.params

  let sql = 'UPDATE pantriesSettings SET mergeStatus= ? , active=0 WHERE owner= ? '

  sql = mysql.format(sql, [mergeId, req.user])

  pool.query(sql, (err, results) => {
    if(err) return handleSQLError(res, err)
    next()
  })
}

const deactivateShopList = (req, res, next) => {

  const {mergeId} = req.params

  let sql = ' UPDATE shopListsSettings SET mergeStatus= ? , active=0 WHERE owner= ? '

  sql = mysql.format(sql, [mergeId, req.user])

  pool.query(sql, (err, results) => {
    if(err) return handleSQLError(res, err)
    next()
  })

}

const pantryMergeStatus = (req, res, next) => {

  const {mergeId} = req.params

  let sql = 'UPDATE pantriesSettings SET mergeStatus= ? WHERE owner=(SELECT requester FROM mergeRequests WHERE mergeReqId= ? )'

  sql = mysql.format(sql, [mergeId, mergeId])

  pool.query(sql, (err, results) => {
    if(err) return handleSQLError(res, err)
    next()
  })
}

const shopListMergeStatus = (req, res, next) => {

  const {mergeId} = req.params

  let sql = 'UPDATE shopListsSettings SET mergeStatus= ? WHERE owner=(SELECT requester FROM mergeRequests WHERE mergeReqId= ? )'

  sql = mysql.format(sql, [mergeId, mergeId])

  pool.query(sql, (err, results) => {
    if(err) return handleSQLError(res, err)
    return res.send('CONGRATULATIONS! YOUR LISTS HAVE NOW BEEN MERGED')
  })
}

module.exports = {
  acceptMergeReq,
  acceptAccess,
  deactivateAccess,
  copyPantry,
  copyShopList,
  updatePalsListAccess,
  deactivatePantry,
  deactivateShopList,
  pantryMergeStatus,
  shopListMergeStatus
}