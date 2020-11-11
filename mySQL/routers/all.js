const express = require('express')
const {
  allPantries,
  allShoppingLists,
  allMerges, 
  allPalLists,
  userSummary

} = require('../controller/admin/admin')
const mou = require('../middleware/mou')


const all = express.Router({mergeParams: true})

//GET
all.get('/pantries', mou, allPantries)
all.get('./shopping', mou, allShoppingLists)
all.get('/merges', mou ,allMerges)
all.get('/palList', mou ,allPalLists)
all.get('/counts', mou , userSummary)

//POST
all.post('/createUser', mou ,createUser)

// //PUT
// router.put('/updateStatus', updateActiveStat)

//DELETE

module.exports = all
