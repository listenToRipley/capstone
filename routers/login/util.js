const express = require('express')
const {  
  allUsers,
  searchUsers,
  allAllergies,
  allDiets,
  addMeasurement,
  addAllergy,
  addDiet
} = require('../../controller/appFunc/util')
const util = express.Router({mergeParams: true})

//GET
util.get('/users', allUsers)
util.get('/searchUsers', searchUsers)
util.get('/allergies', allAllergies)
util.get('/diets', allDiets)

//PUT
util.post('/addMeasure', addMeasurement)
util.post('/addAllergy', addAllergy)
util.post('/addDiet', addDiet)

//POST

module.exports = util