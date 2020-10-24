const express = require('express')
const {
  getAllPantries,
  getPantry,
  addToPantry,
  removeFromPantry,
  updatePantryItem,
  updateAutoAddShop
} = require('../controller/pantryController')
const router = express.Router()

//GET
router.get('/myPantry/:username', myPantry)

//POST
router.post('/add/', addToPantry)

//PUT
router.put('/remove/:id', removeFromPantry)
router.put('/upItem/:id', updateAutoAddShop)
router.put('/upAutoAddShop/:boo', updateAutoAddShop)

//DELETE


module.exports = router



