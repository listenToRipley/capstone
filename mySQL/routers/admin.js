const express = require('express')

const bodyParser = require('body-parser')
const jsonParser = bodyParser.json()
const urlencodedParser = bodyParser.urlencoded({extended: false})

const {
  forgotUsername
} = require('../controller/admin/admin')

const {
  verifyUsername,
  verifyEmail, 
  createUsername,
  createUserDetails,
  createDefaultDisplay,
  createPantry,
  createShoppingList,
  createPalList,
  createUserLocation,
  createUserAccess,
  newUser
} = require('../controller/admin/createNewUser')

const {
  updatePassword
} = require('../controller/appFunc/password/password')

const admin = express.Router({mergeParams: false})

//GET
admin.get('/:email', forgotUsername)
admin.get('/vUsername/:user', verifyUsername)
admin.get('/vEmail/:email', verifyEmail)
//maybe protected route
admin.get('/vUserCreation/:username', newUser)

//POST
admin.post('/createUser',
createUsername,
createUserDetails,
createDefaultDisplay,
createPantry,
createShoppingList,
createPalList,
createUserLocation,
createUserAccess)

//PUT
//protected route, process can only be accessed through link sent to email? Stand alone? 
admin.put('/password/:email',updatePassword)

module.exports = admin




