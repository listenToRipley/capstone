const express = require('express')

const { 
  autoAddToPantry,
  removeFrom,
  updateItem,
  markOff
} = require('../../controller/appFunc/shoppingLists/byItem')

const {
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

shopList.get('/items/:listId', thisShopList)
shopList.get('/count/:listId', shopListCount)

shopList.post('/addToList/:listId', addToShopList)
shopList.post('/autoAddToPantry/:itemId',  autoAddToPantry)


shopList.put('/remove/:itemId', removeFrom)
shopList.put('/upItem/:itemId', updateItem)
shopList.put('/upName/:listId', updateListName)
shopList.put('/upAutoAddPantry/:listId', updateAutoAddShop)
shopList.put('/markOff/:itemId', markOff)

module.exports = shopList



