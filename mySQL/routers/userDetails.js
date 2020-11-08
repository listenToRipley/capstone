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
  updateDisplayPref,
  updateDisplayPrefDefault,
  updateDisplayPrivate
} = require('../controller/users/information/displayPref')

const {
  userPersonalInfo,
  userLocation,
  userBirthday,
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

const {
  findOwner,
  findCoOwner,
  findOwnerLists
} = require('../controller/appFunc/determinePrimary')

const just = express.Router({mergeParams: true})
//NEED TO CONSIDER MODULARIZING 


//GET
just.get('/info', userPersonalInfo)
just.get('/displayPref', justDisplayPrefer)
just.get('/location', userLocation)
just.get('/DOB', userBirthday)
just.get('/likes', justLikes)
just.get('/dislikes', justDislikes)
just.get('/diets', justDiets)
just.get('/allergies', justAllergies)
just.get('/primaryList', findOwner, findCoOwner, findOwnerLists)

//POST
just.post('/addLike', addLike)
just.post('/addDislike', addDislike)
just.post('/addDiet/:dietId', addDiet)
just.post('/addAllergy/:allergyId', addAllergy)


//PUT
just.put('/upPassword/', updatePassword )
just.put('/upEmail/', updateEmail)

just.put('/upDisplayPrefEa/', updateDisplayPref)
just.put('/upDisplayDefault/', updateDisplayPrefDefault)
just.put('/upDis/private', updateDisplayPrivate)

just.put('/upDOB/', updateBirthday)
just.put('/upLoc/', updateLocation)
just.put('/upPhone/', updatePhoneNum)

just.put('/reLike/:entryId', removeLike)
just.put('/reDislike/:entryId', removeDislike)
just.put('/reDiet/:entryId', removeDiet)
just.put('/reAllergy/:entryId', removeAllergy)

//DELETE

module.exports = just