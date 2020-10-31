const express = require('express')
const {  
  allUsers,
  addMeasurement,
  addAllergy,
  addDiet
} = require('../controller/admin')
const util = express.Router({mergeParams: true})

//GET
util.get('/' , allUsers)

//PUT
util.post('/addMeasure', addMeasurement)
util.post('/addAllergy', addAllergy)
util.post('/addDiets', addDiet)

//POST

module.exports = util