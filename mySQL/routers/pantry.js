const express = require('express')
const {
  getPantry,
  addToPantry,
  removeFromPantry,
  updatePantryItem,
  updateAutoAddShop
} = require('../controller/pantries/pantry')
const pantry = express.Router({mergeParams: true})
//WOULD ME QUERY BE SHORTED IF I COULD ID THE PRIMARY PANTRY FIRST? 

//GET
pantry.get('/pantry', getPantry)

//POST
pantry.post('/add/', addToPantry)

//PUT
pantry.put('/remove/:id', removeFromPantry)
pantry.put('/upItem/:id', updatePantryItem)
//this id should be the item of the 
pantry.put('/upAutoAddShop/:id', updateAutoAddShop)

//DELETE


module.exports = pantry



