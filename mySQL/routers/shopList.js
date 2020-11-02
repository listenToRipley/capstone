const express = require('express')

const { 
  removeFrom,
  updateItem
} = require('../controller/appFunc/shoppingLists/byItem')

const {
  shopListDetails, 
  thisShopList,
  addToShopList
} = require('../controller/appFunc/shoppingLists/byList')


const {
  myShopListDetails,
  myShoppingListContents,
  myShopListAdd
} = require('../controller/appFunc/shoppingLists/owner')

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
shopList.get('/shopping/:id', shopListDetails)
shopList.get('/shoppingList/:id', thisShopList)

//MY CURRENT USER
shopList.get('/myShopDetails', myShopListDetails)
shopList.get('/myShopList', myShoppingListContents)

//POST
shopList.post('/addToList', addToShopList)

//BY CURRENT USER
shopList.post('/myAdd', myShopListAdd)

shopList.post('/addReq/', addShopRequest)

//PUT
shopList.put('/appReq/:boo', approveShopRequest)
shopList.put('/decReq/:boo', declineShopRequest)
shopList.put('/remove/:id', removeFrom)
shopList.put('/upItem/:id', updateItem)
shopList.put('/updateName/:name', updateListName)
shopList.put('/upAutoAddPantry/:boo', updateAutoAddShop)

//DELETE

module.exports = shopList



