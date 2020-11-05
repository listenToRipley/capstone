const express = require('express')
const {  
  allUsers,
  allAllergies,
  allDiets,
  addMeasurement,
  addAllergy,
  addDiet
} = require('../controller/appFunc/util')
const util = express.Router({mergeParams: true})

//GET
util.get('/users' , allUsers)
util.get('/allergies', allAllergies)
util.get('/diets', allDiets)

//PUT
util.post('/addMeasure', addMeasurement)
util.post('/addAllergy', addAllergy)
util.post('/addDiets', addDiet)

//POST

module.exports = util