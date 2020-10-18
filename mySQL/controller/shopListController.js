const mysql = require('mysql')
const pool = require('../sql/connection')
//this will pull the shopping list

//GET
const myShopList = (req, res) => {
  console.log('get the shoppingList for this user')
//write a query that returns the shopping List for the user currently logged in  
let sql = 'SELECT sL.quanity, sL.item, sL.meas, sL.spoonId, sL.activeItem, sLS.owner, sLS.listName, sLS.active AS listActive, sLS.mergeStatus, sLS.autoAdd AS autoAddToPantry FROM shoppingLists AS sL JOIN shopListSettings AS sLS JOIN palListSettings AS pLS ON sL.listOwner=sLS.shopList AND sLS.owner=? AND sL.activeItem=1; '

sql=mysql.format(sql,[req.params.user])

pool.query(sql, (err, row) => {
  if(err) return handleSQLError(res, err)
  return res.json(row); 
})  

}

//POST 
const addToShopList = (req, res) => {
  console.log('add item to the shopping list')
//write a query that add items to the list
}

const addShopRequest = (req, res) => {
  console.log('add item to be requested')
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
  addToShopList,
  addShopRequest,
  approveShopRequest,
  declineShopRequest, 
  removeFromShopList,
  updateLiItem,
  updateListName,
  updateAutoAddPantry
}