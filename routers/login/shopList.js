const express = require('express')

const { 
  autoAddToPantry,
  removeFrom,
  updateItem,
  markOff
} = require('../../controller/appFunc/shoppingLists/byItem')

const {
  shopListDetails, 
  shopListCount,
  thisShopList,
  addToShopList
} = require('../../controller/appFunc/shoppingLists/byList')

const {
  updateListName,
  updateAutoAddShop
} = require('../../controller/appFunc/shoppingLists/settings')

const requests = require('./requests')

const shopList = express.Router({mergeParams: true})
//WOULD MY REQUEST BE EASIER IF I ESTABLISHED THE PRIMARY LIST ID? 

// shopList.use('/:listId', requests)

//GET
shopList.get('/details/:listId', shopListDetails)
shopList.get('/items/:listId', thisShopList)
shopList.get('/count/:listId', shopListCount)

//POST
shopList.post('/addToList/:listId', addToShopList)
shopList.post('/autoAddToPantry/:itemId',  autoAddToPantry)

//PUT
shopList.put('/remove/:itemId', removeFrom)
shopList.put('/upItem/:itemId', updateItem)
shopList.put('/upName/:listId', updateListName)
shopList.put('/upAutoAddPantry/:listId', updateAutoAddShop)
 shopList.put('/markOff/:itemId', markOff)

//DELETE

module.exports = shopList



