const { NextWeek } = require('@material-ui/icons')
const mysql = require('mysql')
const pool = require('../../../sql/connection')
const { handleSQLError } = require('../../../sql/error')
//this will pull the shopping list

//GET
const reqCount = (req, res) => {
  console.log(req.params.listId)
  console.log('owner and co owners should be abel to view these items')

  let sql='SELECT COUNT(reqItId) AS requestCount FROM itemRequest WHERE active=1 AND shopList=? '

  sql = mysql.format(sql, [req.params.listId])
  console.log('sql', sql)
  pool.query (sql, (err, row ) => {
    if(err) return handleSQLError(res, err) 

    console.log(total)
    if(total===0) {
      return res.json({count: 0})
    } else {
      return res.json(row)
    }
  })
}

//THIS IS ONLY AVAILABLE AS A OWNER OR CO-OWNER  
const viewShopRequests = (req, res) => {
  console.log(req.params.listId)
  console.log('owner and co owners should be abel to view these items')

  let sql='SELECT * FROM itemRequest WHERE active=1 AND shopList=? '

  sql=mysql.format(sql[req.params.listId])
  console.log('sql', sql)
  pool.query(sql, (err, row) => {
    if(err) return handleSQLError(res, err) 
    let total = row[0]['*']
    console.log(total)
    if(total===0) {
      return res.json({count: 0})
    } else {
      return res.json(row)
    }
  })
}

//POST 

//CAN ONLY DO AS A REQUESTER
const addShopRequest = (req, res) => {
  console.log('add item to be requested')

  const { quantity, measId, item, spoonId} = req.body
  const { listId} = req.params

  //work in progress - needs to be some kind of join to verify the access as a requesters 
  let sql='INSERT INTO itemRequest (requester, quantity, measId, item, spoonId, shopList, access) VALUES (? , ?, ?, ? , ?, ?, (SELECT accessId FROM access WHERE username= ? AND shopListRole=5 AND shopList=?))'

  sql=mysql.format(sql, [req.user,quantity, measId, item, spoonId, listId, user, listId])

  pool.query(sql, (err, row) => {
    if(err) return handleSQLError(res, err)
    return res.json( { newId: results.insertId} );
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
  addShopRequest,
  approveShopRequest,
  declineShopRequest
}