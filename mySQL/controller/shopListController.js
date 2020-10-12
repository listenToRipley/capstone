const mysql = require('mysql')
const pool = require('../sql/connection')
//this will pull the shopping list

//GET
const getShopList = (req, res) => {
  console.log('get the shoppingList for this user')
//write a query that returns the shopping List for the user currently logged in  
}

//POST 
const addToShopList = (req, res) => {
  console.log('add item to the shopping list')
//write a query that add items to the list
}

const removeFromShopList = (req, res) => {
  console.log('remove item to the shopping list')
//write a query that add items to the list
}


//PUT 
const updateLiItem = (req, res) => {
  console.log('update item on list')
  //write a query that updates an item on the list 
}

const updateListName = (req, res) => {
  console.log('update the listName')
  //write a query that update the list name
}

module.exports = { 
  getShopList,
  addToShopList,
  removeFromShopList,
  updateLiItem,
  updateListName
}