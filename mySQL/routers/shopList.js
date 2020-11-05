const express = require('express')

const { 
  removeFrom,
  updateItem
} = require('../controller/appFunc/shoppingLists/byItem')

const {
  shopListDetails, 
  shopListCount,
  thisShopList,
  addToShopList
} = require('../controller/appFunc/shoppingLists/byList')

const {
  viewShopRequests,
  addShopRequest,
  approveShopRequest,
  declineShopRequest, 
} = require('../controller/appFunc/shoppingLists/requests')

const {
  updateListName,
  updateAutoAddShop
} = require('../controller/appFunc/shoppingLists/settings')

const shopList = express.Router({mergeParams: true})
//WOULD MY REQUEST BE EASIER IF I ESTABLISHED THE PRIMARY LIST ID? 

//GET
shopList.get('/shopping/:listId', shopListDetails)
shopList.get('/shoppingList/:listId', thisShopList)
shopList.get('/shoppingList/:listId', shopListCount)

//POST
shopList.post('/addToList/listId', addToShopList)

shopList.post('/addReq/:shopListId', addShopRequest)

//PUT
shopList.put('/appReq/:boo', approveShopRequest)
shopList.put('/decReq/:boo', declineShopRequest)
shopList.put('/remove/:itemId', removeFrom)
shopList.put('/upItem/:itemId', updateItem)
shopList.put('/updateName/:name', updateListName)
shopList.put('/upAutoAddPantry/:boo', updateAutoAddShop)

//DELETE

module.exports = shopList



