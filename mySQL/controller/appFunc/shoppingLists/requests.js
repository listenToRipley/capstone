const mysql = require('mysql')
const pool = require('../../../sql/connection')
const { handleSQLError } = require('../../../sql/error')
//this will pull the shopping list

//GET

//THIS IS ONLY AVAILABLE AS A OWNER OR CO-OWNER  

const viewShopRequests = (req, res) => {
  console.log('owner and co owners should be abel to view these items')

  sql='SELECT * FROM itemRequest WHERE shopList= ? '

  sql=mysql.format(sql[req.params.listId])

  pool.query(sql, (err, row) => {
    if(err) return handleSQLError(res, err) 
    return res.json(row)
  })
}

//POST 

//CAN ONLY DO AS A REQUESTER
const addShopRequest = (req, res) => {
  console.log('add item to be requested')

  const { quantity, measId, item, spoonId} = req.body
  const {user, listId} = req.params

  //work in progress - needs to be some kind of join to verify the access as a requesters 
  sql='INSERT INTO itemRequest (requester, quantity, measId, item, spoonId, shopList, access) VALUES (? , ?, ?, ? , ?, ?, (SELECT accessId FROM access WHERE username= ? AND shopListRole=5 AND shopList=?))'

  sql=mysql.format(sql, [user,quantity, measId, item, spoonId, listId, user, listId])

  pool.query(sql, (err, row) => {
    if(err) return handleSQLError(res, err)
    return res.json( { newId: results.insertId} );
  })

}

//PUT  OWNER OR CO-OWNER
const approveShopRequest = (req, res) => {
  console.log('approved the request') 

}

const declineShopRequest = (req, res) => {
  console.log('sorry, we are not going to get that')
}




module.exports = { 
  viewShopRequests,
  addShopRequest,
  approveShopRequest,
  declineShopRequest, 
}