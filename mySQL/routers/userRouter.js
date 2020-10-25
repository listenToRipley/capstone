const express = require('express')
const {
  justUserInfo,
  justDisplayPreferences,
  justLocation,
  justBirthday,
  justLikes,
  justDislikes,
  justDiets,
  justAllergies,
  createUser,
  addLike, 
  addDislike, 
  addDiet,
  addAllergy,
  updatePassword,
  updateEmail, 
  updateDisplayPreferences, 
  updateBirthday,
  updateLocation,  
  updatePhoneNum,
  removeLike,
  removeDislike,
  removeDiet,
  removeAllergy
} = require('../controller/user')
const router = express.Router({mergeParams: true})

//GET
router.get('/info', justUserInfo)
router.get('/displayPref', justDisplayPreferences)
router.get('/location', justLocation)
router.get('/DOB', justBirthday)
router.get('/likes', justLikes)
router.get('/dislikes', justDislikes)
router.get('/diets', justDiets)
router.get('/allergies', justAllergies)

//POST
router.post('/newUser', createUser)
router.post('/addLike', addLike)
router.post('/addDislike', addDislike)
router.post('/addDiet', addDiet)
router.post('/addAllergy', addAllergy)

//PUT
router.put('/upPassword/:word', updatePassword )
router.put('/upEmail/:email', updateEmail)
router.put('/upDisplayPref/:boo', updateDisplayPreferences)
router.put('/upDOB/:dob', updateBirthday)
router.put('/upLoc/:location', updateLocation)
router.put('/upPhone/:phone', updatePhoneNum)
router.put('/reLike/:id', removeLike)
router.put('/reDislike/:id', removeDislike)
router.put('/reDiet/:id', removeDiet)
router.put('/reAllergy/:id', removeAllergy)

//DELETE

module.exports = router