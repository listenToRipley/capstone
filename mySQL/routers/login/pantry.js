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
  updatePantryItem,
  outOf
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
pantry.post('/pantry/add/:pantryId', addToPantry)
pantry.post('/pantry/autoAdd/:itemId', autoAddToShopList)

//PUT
pantry.put('/remove/:itemId', removeFromPantry)
pantry.put('/upItem/:itemId', updatePantryItem)
//this id should be the item of the 
pantry.put('/upAutoAddShop/:pantryId', updateAutoAddShop)
pantry.put('/updateName/:pantryId', updateTitle )
pantry.put('/outOf/:itemId', outOf)

//DELETE


module.exports = pantry



