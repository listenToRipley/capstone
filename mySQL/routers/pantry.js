const express = require('express')
const {
  pantryDetails,
  pantryCount,
  pantryItems,
  addToPantry
} = require('../controller/appFunc/pantries/byList')

const {
  removeFromPantry,
  updatePantryItem
} = require('../controller/appFunc/pantries/byItem')

const {
  myPantryDetails,
  myPantryContents
} = require('../controller/appFunc/pantries/owner')

const {  
  updateAutoAddShop
} = require('../controller/appFunc/pantries/settings')


const pantry = express.Router({mergeParams: true})
//WOULD ME QUERY BE SHORTED IF I COULD ID THE PRIMARY PANTRY FIRST? 

//GET
//this should be the id for the primary pantry
pantry.get('/:id', pantryDetails)
pantry.get('/pantryItems/:id', pantryItems)
pantry.get('/pantryCount/:id', pantryCount)

pantry.get('/pantryInfo', myPantryDetails)
pantry.get('/pantry', myPantryContents)


//POST
pantry.post('/pantry/add/:id', addToPantry)

//PUT
pantry.put('/remove/:id', removeFromPantry)
pantry.put('/upItem/:id', updatePantryItem)
//this id should be the item of the 
pantry.put('/upAutoAddShop/:id', updateAutoAddShop)

//DELETE


module.exports = pantry



