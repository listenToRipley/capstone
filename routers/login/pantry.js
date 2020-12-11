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

pantry.get('/:pantryId', pantryDetails)
pantry.get('/access/:pantryId', pantryAccess)
pantry.get('/count/:pantryId', pantryCount)
pantry.get('/items/:pantryId', pantryItems)


pantry.post('/add/:pantryId', addToPantry)
pantry.post('/autoAdd/:itemId', autoAddToShopList)


pantry.put('/remove/:itemId', removeFromPantry)
pantry.put('/upItem/:itemId', updatePantryItem)

pantry.put('/upAutoAddShop/:pantryId', updateAutoAddShop)
pantry.put('/upName/:pantryId', updateTitle )

module.exports = pantry



