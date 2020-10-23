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
} = require('../controller/shopListController')
const router = express.Router()

//GET
router.get('/myShopping/:user', myShopList)

//POST
router.post('/add/', addToShopList)
router.post('/addReq/', addShopRequest)

//PUT
router.put('/appReq/:boo', approveShopRequest)
router.put('/decReq/:boo', declineShopRequest)
router.put('/remove/:id', removeFromShopList )
router.put('/upItem/:id', updateLiItem)
router.put('/updateName/:name', updateListName)
router.put('/upAutoAddPantry/:boo', updateAutoAddPantry)

//DELETE

module.exports = router



