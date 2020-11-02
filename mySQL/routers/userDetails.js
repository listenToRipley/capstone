const express = require('express')
const {
  justAllergies,
  addAllergy,
  removeAllergy
} = require('../controller/users/tastes/allergies')

const {
  justDiets,
  addDiet,
  removeDiet
} = require('../controller/users/tastes/diets')

const {
  justDislikes,
  addDislike, 
  removeDislike
} = require('../controller/users/tastes/dislikes')

const {
  justDisplayPrefer, 
  updateDisplayPrefAll,
  updateDisplayPrefEach,
  updateDisplayPrefDefault,
  updateDisplayPrivate
} = require('../controller/users/information/displayPref')

const {
  justUserInfo,
  justLocation,
  justBirthday,
  updateBirthday, 
  updateEmail,
  updateLocation,
  updatePhoneNum
} = require('../controller/users/information/info')

const {
  justLikes,
  addLike,
  removeLike 
} = require('../controller/users/tastes/likes')

const {
  updatePassword
} = require('../controller/appFunc/password/password')

const just = express.Router({mergeParams: true})
//NEED TO CONSIDER MODULARIZING 


//GET
just.get('/info', justUserInfo)
just.get('/displayPref', justDisplayPrefer)
just.get('/location', justLocation)
just.get('/DOB', justBirthday)
just.get('/likes', justLikes)
just.get('/dislikes', justDislikes)
just.get('/diets', justDiets)
just.get('/allergies', justAllergies)

//POST
just.post('/addLike', addLike)
just.post('/addDislike', addDislike)
just.post('/addDiet', addDiet)
just.post('/addAllergy', addAllergy)


//PUT
just.put('/upPassword/', updatePassword )
just.put('/upEmail/', updateEmail)

just.put('/upDisplayPref/', updateDisplayPrefAll)
just.put('/upDisplayPrefEa/', updateDisplayPrefEach)
just.put('/upDisplayDefault/', updateDisplayPrefDefault)
just.put('/upDis/private', updateDisplayPrivate)

just.put('/upDOB/', updateBirthday)
just.put('/upLoc/', updateLocation)
just.put('/upPhone/', updatePhoneNum)

just.put('/reLike/:id', removeLike)
just.put('/reDislike/:id', removeDislike)
just.put('/reDiet/:id', removeDiet)
just.put('/reAllergy/:id', removeAllergy)

//DELETE

module.exports = just