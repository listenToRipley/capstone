const express = require('express')
const {
  myShopList,
  addToShopList,
  addShopRequest,
  approveShopRequest,
  declineShopRequest, 
  removeFromShopList,
  updateLiItem,
  updateListName,
  updateAutoAddPantry
} = require('../controller/shopList')
const shopList = express.Router({mergeParams: true})
//WOULD MY REQUEST BE EASIER IF I ESTABLISHED THE PRIMARY LIST ID? 

//GET
shopList.get('/myShopping', myShopList)

//POST
shopList.post('/add/', addToShopList)
shopList.post('/addReq/', addShopRequest)

//PUT
shopList.put('/appReq/:boo', approveShopRequest)
shopList.put('/decReq/:boo', declineShopRequest)
shopList.put('/remove/:id', removeFromShopList )
shopList.put('/upItem/:id', updateLiItem)
shopList.put('/updateName/:name', updateListName)
shopList.put('/upAutoAddPantry/:boo', updateAutoAddPantry)

//DELETE

module.exports = shopList



