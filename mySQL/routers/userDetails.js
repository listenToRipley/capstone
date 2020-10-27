const express = require('express')
const {
  justUserInfo,
  justDisplayPrefer,
  justLocation,
  justBirthday,
  justLikes,
  justDislikes,
  justDiets,
  justAllergies,
  addLike, 
  addDislike, 
  addDiet,
  addAllergy,
  updatePassword,
  updateEmail, 
  updateDisplayPrefAll,
  updateDisplayPrefEach,
  updateDisplayPrefDefault,
  updateDisplayPrivate,
  updateBirthday,
  updateLocation,  
  updatePhoneNum,
  removeLike,
  removeDislike,
  removeDiet,
  removeAllergy
} = require('../controller/user')
const just = express.Router({mergeParams: true})

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