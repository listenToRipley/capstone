const mysql = require('mysql')
const pool = require('../../../sql/connection')
const { handleSQLError } = require('../../../sql/error')

//GET
const reqCount = (req, res) => {

  let sql='SELECT COUNT(reqItId) AS requestCount FROM itemRequest WHERE active=1 AND shopList=? '

  sql = mysql.format(sql, [req.params.listId])

  pool.query (sql, (err, row ) => {
    if(err) return handleSQLError(res, err) 
    let total = row[0]['requestCount']

    if(total===0) {
      return res.send('No requests')
    } else {
      return res.json(row)
    }
  })
}

//THIS IS ONLY AVAILABLE AS A OWNER OR CO-OWNER  
const viewShopRequests = (req, res) => {

  let sql='SELECT * FROM itemRequest WHERE active=1 AND shopList=? '

  sql = mysql.format(sql, [req.params.listId])
  console.log('sql', sql)
  pool.query(sql, (err, row) => {
    if(err) return handleSQLError(res, err) 
    let total = row[0]['*']

    if(total===0) {
      return res.json({count: 0})
    } else {
      return res.json(row)
    }
  })
}

const viewSentRequests = (req, res) => {

  let sql='SELECT * FROM itemRequest WHERE active=1 AND requester=?'

  sql = mysql.format(sql, [req.params.listId, req.user])
  console.log('sql', sql)
  pool.query(sql, (err, row) => {
    if(err) return handleSQLError(res, err) 
    let total = row[0]['*']

    if(total===0) {
      return res.send(`You haven't sent any request`)
    } else {
      return res.json(row)
    }
  })
}

//POST 

//CAN ONLY DO AS A REQUESTER
const addShopRequest = (req, res) => {

  const { quantity, measId, item, spoonId} = req.body
  const { listId} = req.params

  let sql='INSERT INTO itemRequest (requester, quantity, measId, item, spoonId, shopList, access) VALUES (? , ?, ?, ? , ?, ?, (SELECT accessId FROM access WHERE username=? AND shopListRole=5 AND shopList=?))'

  sql=mysql.format(sql, [req.user,quantity, measId, item, spoonId, listId, req.user, listId])

  pool.query(sql, (err, results) => {
    if(err) return handleSQLError(res, err)
    return res.json( { newReqId: results.insertId} );
  })

}

//PUT  OWNER OR CO-OWNER
const approveShopRequest = (req, res) => {
  console.log('approved the request') 

  const {reqId} = req.params

  let sql='BEGIN; UPDATE itemRequest SET active=0, approved=1 WHERE reqItId= ?; INSERT INTO shoppingLists (shopList, quantity, measId, item, spoonId, reqItem) VALUES ((SELECT shopList FROM itemRequest WHERE reqItId= ? ), (SELECT quantity FROM itemRequest WHERE reqItId=?),(SELECT measId FROM itemRequest WHERE reqItId= ? ),(SELECT item FROM itemRequest WHERE reqItId= ?),(SELECT spoonId FROM itemRequest WHERE reqItId=?), ?);COMMIT'

  sql= mysql.format(sql, [reqId, reqId, reqId, reqId, reqId, reqId, reqId])

  pool.query(sql, (err, row) => {
    if(err) return handleSQLError(res, err)
    return res.json( { newId: results.insertId} );
  })

}

//use this for canceling req
const declineShopRequest = (req, res) => {
  console.log('sorry, we are not going to get that')

  let sql = 'UPDATE itemRequest SET active=0, approved=0 WHERE reqItId= ? '
  
  sql=mysql.format(sql, [req.params.reqId])

  pool.query(sql, (err, row) => {
    if(err) return handleSQLError(res, err)
    return res.send('item was declined')
  })
}




module.exports = { 
  reqCount,
  viewShopRequests,
  viewSentRequests,
  addShopRequest,
  approveShopRequest,
  declineShopRequest
}