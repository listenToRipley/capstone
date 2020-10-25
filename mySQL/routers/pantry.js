const express = require('express')
const {
  getPantry,
  addToPantry,
  removeFromPantry,
  updatePantryItem,
  updateAutoAddShop
} = require('../controller/pantry')
const router = express.Router()

//GET
router.get('/myPantry', getPantry)

//POST
router.post('/add/', addToPantry)

//PUT
router.put('/remove/:id', removeFromPantry)
router.put('/upItem/:id', updatePantryItem)
router.put('/upAutoAddShop/:boo', updateAutoAddShop)

//DELETE


module.exports = router



