const express = require('express')
const usersController = require('../controller/userController')
const router = express.Router()

//GET
router.get('/', usersController.justUserInfo)

justDisplayPreferences,
justLocation,
justBirthday,
justLikes,
justDislikes,
justDiets,
justAllergies,

//PUT
router.put('/', )

createUser,
addLike, 
addDislike, 
addDiet,
addAllergy,

//PUSH
router.push('/', )

updatePassword,
updateEmail, 
updateDisplayPreferences, 
updateBirthday,
updateLocation,  
updatePhoneNum,

//DELETE
router.delete('/', )

removeLike,
removeDislike,
removeDiet,
removeAllergy

module.exports = router