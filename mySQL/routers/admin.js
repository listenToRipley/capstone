const express = require('express')
const {
  testing,
  AllPantries,
  allMerges,
  allPalLists,
  allShoppingLists,
  allDiets,
  validateLogIn,
  countSummary,
  updateActiveStat
} = require('../controller/admin')
const router = express.Router()

//GET
router.get('/', testing)
// router.get('/pantries',AllPantries)
// router.get('./shopping', allShoppingLists)
// router.get('/merges', allMerges)
// router.get('/palList', allPalLists)
// router.get('/diets', allDiets)
// router.get('/validation', validateLogIn)
// router.get('/counts', countSummary)

// //POST

// //PUT
// router.put('/updateStatus', updateActiveStat)

//DELETE

module.exports = router

  


