const express = require('express')
const admin = require('../controller/admin')
const router = express.Router()

//GET
router.get('/' , admin.allUsers)
router.get('/merges', admin.allMerges)
router.get('/palList', admin.allPalLists)
router.get('/validation', admin.validateLogIn)
router.get('/counts', admin.countSummary)

//POST
router.post('/addMeasure', admin.addMeasurement)
router.post('/addAllergy', admin.addAllergy)
router.post('/addDiets', admin.addDiet)

//PUT
router.put('/deactivate', admin.deactivateUser)
router.put('/reactivate', admin.reactivateUser)

//DELETE

module.exports = router

  


