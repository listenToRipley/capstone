const express = require('express')
const {
  testing,
  allPantries,
  allMerges,
  allPalLists,
  allShoppingLists,
  allDiets,
  validateLogIn,
  countSummary,
  updateActiveStat
} = require('../controller/admin')
const admin = express.Router({mergeParams: true})

//GET
admin.get('/', testing)
admin.get('/pantries', allPantries)
admin.get('./shopping', allShoppingLists)
admin.get('/merges', allMerges)
admin.get('/palList', allPalLists)
admin.get('/diets', allDiets)
admin.get('/validation', validateLogIn)
admin.get('/counts', countSummary)

// //POST

// //PUT
// router.put('/updateStatus', updateActiveStat)

//DELETE

module.exports = admin

  


