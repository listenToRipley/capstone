const express = require('express')
const {
  allPantries,
  allShoppingLists,
  allMerges, 
  allPalLists,
  userSummary

} = require('../../controller/admin/admin')

const all = express.Router({mergeParams: true})

//GET
all.get('/pantries',  allPantries)
all.get('./shopping', allShoppingLists)
all.get('/merges', allMerges)
all.get('/palList', allPalLists)
all.get('/counts', userSummary)

//POST
// admou.post('/createUser', mou ,createUser)

// //PUT
// router.put('/updateStatus', updateActiveStat)

//DELETE

module.exports = all
