const mysql = require('mysql')
const pool = require('../../../sql/connection')
const { handleSQLError } = require('../../../sql/error')

const approveReq = (req, res, next) => {

  const {reqId} = req.params

  let sql='UPDATE itemRequest SET active=0, approved=1 WHERE reqItId= ?'

  sql= mysql.format(sql, [reqId])

  pool.query(sql, (err, row) => {
    if(err) return handleSQLError(res, err)
    next()
  })

}

const addToShopList = (req, res) => {

  const {listId,reqId} = req.params

  let sql='INSERT INTO shoppingLists (shopList, quantity, measId, item, spoonId, reqItem) VALUES (?, (SELECT quantity FROM itemRequest WHERE reqItId=?),(SELECT measId FROM itemRequest WHERE reqItId= ? ),(SELECT item FROM itemRequest WHERE reqItId= ?),(SELECT spoonId FROM itemRequest WHERE reqItId=?), ?)'

  sql= mysql.format(sql, [listId, reqId, reqId, reqId, reqId, reqId])

  pool.query(sql, (err, results) => {
    if(err) return handleSQLError(res, err)
    return res.json( { shopEntryId: results.insertId} );
  })

}

module.exports = { 
  approveReq,
  addToShopList
}