const express = require('express')
const {
  pantryDetails,
  pantryCount,
  pantryItems,
  addToPantry
} = require('../../controller/appFunc/pantries/byList')

const {
  autoAddToShopList,
  removeFromPantry,
  updatePantryItem,
  outOf
} = require('../../controller/appFunc/pantries/byItem')

const {  
  updateAutoAddShop,
  updateTitle
} = require('../../controller/appFunc/pantries/settings')


const pantry = express.Router({mergeParams: true})
//WOULD ME QUERY BE SHORTED IF I COULD ID THE PRIMARY PANTRY FIRST? 

//GET
//this should be the id for the primary pantry
pantry.get('/:pantryId', pantryDetails)
pantry.get('/pantryItems/:pantryId', pantryItems)
pantry.get('/pantryCount/:pantryId', pantryCount)

//POST
pantry.post('/pantry/add/:pantryId', addToPantry)
pantry.post('/pantry/autoAdd/:itemId', autoAddToShopList)

//PUT
pantry.put('/remove/:itemId', removeFromPantry)
pantry.put('/upItem/:itemId', updatePantryItem)
//this id should be the item of the 
pantry.put('/upAutoAddShop/:pantryId', updateAutoAddShop)
pantry.put('/updatePantryName/:pantryId', updateTitle )
pantry.put('/pantryOutOf/:itemId', outOf)

//DELETE


module.exports = pantry



