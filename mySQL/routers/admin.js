const express = require('express')
const {
  testing,
  AllPantries,
  allMerges,
  allPalLists,
  allDiets,
  validateLogIn,
  countSummary,
  deactivateUser,
  reactivateUser
} = require('../controller/admin')
const router = express.Router()

//GET
router.get('/', testing)
// router.get('/pantries',AllPantries)
// router.get('/merges', allMerges)
// router.get('/palList', allPalLists)
// router.get('/diets', allDiets)
// router.get('/validation', validateLogIn)
// router.get('/counts', countSummary)

// //POST

// //PUT
// router.put('/deactivate', deactivateUser)
// router.put('/reactivate', reactivateUser)

//DELETE

module.exports = router

  


