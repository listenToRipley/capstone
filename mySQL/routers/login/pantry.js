const express = require('express')
const {
  pantryDetails,
  pantryAccess,
  pantryCount,
  pantryItems,
  addToPantry
} = require('../../controller/appFunc/pantries/byList')

const {
  autoAddToShopList,
  removeFromPantry,
  updatePantryItem
} = require('../../controller/appFunc/pantries/byItem')

const {  
  updateAutoAddShop,
  updateTitle
} = require('../../controller/appFunc/pantries/settings')


const pantry = express.Router({mergeParams: true})

//GET
//maybe refractor routes so id's come first? change use statements as portal and verification? 
pantry.get('/:pantryId', pantryDetails)
pantry.get('/access/:pantryId', pantryAccess)
pantry.get('/count/:pantryId', pantryCount)
pantry.get('/items/:pantryId', pantryItems)

//POST
pantry.post('/add/:pantryId', addToPantry)
pantry.post('/autoAdd/:itemId', autoAddToShopList)

//PUT
pantry.put('/remove/:itemId', removeFromPantry)
pantry.put('/upItem/:itemId', updatePantryItem)

pantry.put('/upAutoAddShop/:pantryId', updateAutoAddShop)
pantry.put('/upName/:pantryId', updateTitle )

module.exports = pantry



