const express = require('express')
const shopListController = require('../controller/shopListController')
const router = express.Router()

//GET
router.get('/myShopping/:user', shopListController.myShopList)

//POST
router.post('/add/:item', shopListController.addToShopList)
router.post('/addReq/:item', shopListController.addShopRequest)

//PUT
router.put('/appReq/:boo', shopListController.approveShopRequest)
router.put('/decReq/:boo', shopListController.declineShopRequest)
router.put('/remove/:id', shopListController.removeFromShopList )
router.put('/upItem/:id', shopListController.updateLiItem)
router.put('/updateName/:name', shopListController.updateListName)
router.put('/upAutoAddPantry/:boo', shopListController.updateAutoAddPantry)

//DELETE

module.exports = router



