const express = require('express')
const userController = require('../controller/userController')
const router = express.Router()

//GET
router.get('/myInfo/:user', usersController.justUserInfo)
router.get('/displayPref/:user', usersController.justDisplayPreferences)
router.get('/myLoc/:user', userController.justLocation)
router.get('/myDOB/:user', usersController.justBirthday)
router.get('/myLikes/:user', userController.justLikes)
router.get('/myDislikes/:user', userController.justDislikes)
router.get('/myDiets/:user', userController.justDiets)
router.get('/myAllergies/:user', userController.justAllergies)

//POST
router.post('/newUser/', userController.createUser)
router.post('/addLike/', userController.addLike)
router.post('/addDislike/', userController.addDislike)
router.post('/addDiet/', userController.addDiet)
router.post('/addAllergy/', userController.addAllergy)

//PUT
router.put('/upPassword/:word', userController.updatePassword )
router.put('/upEmail/:email', userController.updateEmail)
router.put('/upDisplayPref/:boo', userController.updateDisplayPreferences)
router.put('/upDOB/:dob', userController.updateBirthday)
router.put('/upLoc/:location', userController.updateLocation)
router.put('/upPhone/:phone', userController.updatePhoneNum)
router.put('/reLike/:id', userController.removeLike)
router.put('/reDislike/:id', userController.removeDislike)
router.put('/reDiet/:id', userController.removeDiet)
router.put('/reAllergy/:id', userController.removeAllergy)

//DELETE

module.exports = router