const mysql = require('mysql')
const pool = require('../../sql/connection')
const err = require('../../sql/error')
//this will pull the shopping list

//GET
const shopListDetails


const myShopList = (req, res) => {
  console.log('get the shoppingList for this user')
//write a query that returns the shopping List for the user currently logged in  

//this is a work in process, it is not done ~ we need to account for merges 
let sql = 'SELECT sLS.shopListSetId AS listId,sLS.shopListName AS listName FROM shopListsSettings AS sLS WHERE owner=?'

sql=mysql.format(sql,[req.params.username])

pool.query(sql, (err, row) => {
  if(err) return handleSQLError(res, err)
  return res.json(row); 
})  

}

const viewShopRequests = (req, res) => {
  console.log('owner and co owners should be abel to view these items')
}

//POST 
const addToShopList = (req, res) => {
  console.log('add item to the shopping list')
//write a query that add items to the list
  const { listId, quantity, measure, item, spoon} = req.body

  let sql = 'INSERT INTO shoppingLists (shopList, quantity, measId, item, spoonId) VALUES (?, ?, ?, ?, ?);'
  
  sql=mysql.format(sql, [ listId, quantity, measure, item, spoon ])

  pool.query(sql, (err, row) => {
    if(err) return handleSQLError(res, err)
    return res.json( { newId: results.insertId} );
  })

}

const addShopRequest = (req, res) => {
  console.log('add item to be requested')

  const {} = req.body

  //work in progress - needs to be some kind of join to verify the access as a requesters 
  sql='INSERT INTO itemRequest (requester, quantity, measId, item, spoonId, shopList, access)'

  sql=mysql.format(sql, [])

  pool.query(sql, (err, row) => {
    if(err) return handleSQLError(res, err)
    return res.json( { newId: results.insertId} );
  })

}

//PUT 
const approveShopRequest = (req, res) => {
  console.log('approved the request') 

}

const declineShopRequest = (req, res) => {
  console.log('sorry, we are not going to get that')
}

const removeFromShopList = (req, res) => {
  console.log('remove item to the shopping list')
//write a query that add items to the list
}

const updateLiItem = (req, res) => {
  console.log('update item on list')
  //write a query that updates an item on the list 
}

const updateListName = (req, res) => {
  console.log('update the listName')
  //write a query that update the list name
}

const updateAutoAddPantry = (req, res) => {
  console.log('update the auto add to pantry to be off');
//write a query that turns off that auto add. 
}

module.exports = { 
  myShopList,
  viewShopRequests,
  addToShopList,
  addShopRequest,
  approveShopRequest,
  declineShopRequest, 
  removeFromShopList,
  updateLiItem,
  updateListName,
  updateAutoAddPantry
}