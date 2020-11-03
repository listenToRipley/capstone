const express = require('express')
const {
  allPantries,
  allShoppingLists,
  allMerges, 
  allPalLists,
  allDiets,
  countSummary

} = require('../controller/admin/admin')

const admin = express.Router({mergeParams: true})

//GET
admin.get('/pantries', allPantries)
admin.get('./shopping', allShoppingLists)
admin.get('/merges', allMerges)
admin.get('/palList', allPalLists)
admin.get('/diets', allDiets)
admin.get('/counts', countSummary)

//POST
admin.post('/createUser', createUser)

// //PUT
// router.put('/updateStatus', updateActiveStat)

//DELETE

module.exports = admin