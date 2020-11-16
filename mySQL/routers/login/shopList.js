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
  viewShopRequests,
  addShopRequest,
  approveShopRequest,
  declineShopRequest, 
} = require('../../controller/appFunc/shoppingLists/requests')

const {
  updateListName,
  updateAutoAddShop
} = require('../../controller/appFunc/shoppingLists/settings')

const requests = require('./requests')

const shopList = express.Router({mergeParams: true})
//WOULD MY REQUEST BE EASIER IF I ESTABLISHED THE PRIMARY LIST ID? 

shopList.use('/:listId', requests)

//GET
shopList.get('/shopping/:listId', shopListDetails)
shopList.get('/shoppingList/:listId', thisShopList)
shopList.get('/shoppingList/:listId', shopListCount)
shopList.get('/shopListRequest/:listId', viewShopRequests)

//POST
shopList.post('/addToList/listId', addToShopList)
shopList.post('/addReq/:listId', addShopRequest)
shopList.post('/autoAddToPantry/:itemId',  autoAddToPantry)

//PUT
shopList.put('/appReq/:boo', approveShopRequest)
shopList.put('/decReq/:boo', declineShopRequest)
shopList.put('/remove/:itemId', removeFrom)
shopList.put('/upItem/:itemId', updateItem)
shopList.put('/updateName/:name', updateListName)
shopList.put('/upAutoAddPantry/:boo', updateAutoAddShop)
shopList.put('/markOff/:itemId', markOff)

//DELETE

module.exports = shopList



