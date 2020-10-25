const express = require('express')
const {
  justUserInfo,
  justUserInfo,
  justDisplayPrefer,
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
const router = express.Router({mergeParams: true})

//GET
router.get('/info', justUserInfo)
router.get('/displayPref', justDisplayPrefer)
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
router.put('/upPassword/', updatePassword )
router.put('/upEmail/', updateEmail)

router.put('/upDisplayPref/', updateDisplayPrefAll)
router.put('/upDisplayPrefEa/', updateDisplayPrefEach)
router.put('/upDisplayDefault/', updateDisplayPrefDefault)
router.put('/upDis/private', updateDisplayPrivate)

router.put('/upDOB/', updateBirthday)
router.put('/upLoc/', updateLocation)
router.put('/upPhone/', updatePhoneNum)

router.put('/reLike/:id', removeLike)
router.put('/reDislike/:id', removeDislike)
router.put('/reDiet/:id', removeDiet)
router.put('/reAllergy/:id', removeAllergy)

//DELETE

module.exports = router