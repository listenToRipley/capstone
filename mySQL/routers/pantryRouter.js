const express = require('express')
const pantryController = require('../controller/pantryController')
const router = express.Router()

//GET
router.get('/myPantry/:user', pantryController.myPantry)

//POST
router.post('/add/', pantryController.addToPantry)

//PUT
router.put('/remove/:id', pantry.removeFromPantry)
router.put('/upItem/:id', pantryController.updateAutoAddShop)
router.put('/upAutoAddShop/:boo', pantryController.updateAutoAddShop)

//DELETE


module.exports = router



