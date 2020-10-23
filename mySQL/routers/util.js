const express = require('express')
const {  
  allUsers,
  addMeasurement,
  addAllergy,
  addDiet
} = require('../controller/admin')
const router = express.Router()

//GET
router.get('/' , allUsers)

//PUT
router.post('/addMeasure', addMeasurement)
router.post('/addAllergy', addAllergy)
router.post('/addDiets', addDiet)

//POST