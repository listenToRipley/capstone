const express = require('express')

const bodyParser = require('body-parser')
const jsonParser = bodyParser.json()
const urlencodedParser = bodyParser.urlencoded({extended: false})

const {
  forgotUsername
} = require('../../controller/admin/admin')

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
} = require('../../controller/admin/createNewUser')

const {
  updatePassword
} = require('../../controller/appFunc/password/password')

const admin = express.Router({mergeParams: false})


admin.get('/:email', forgotUsername)
admin.get('/vUsername/:user', verifyUsername)
admin.get('/vEmail/:email', verifyEmail)
admin.get('/vUserCreation/:username', newUser)

admin.post('/createUser',
createUsername,
createUserDetails,
createDefaultDisplay,
createPantry,
createShoppingList,
createPalList,
createUserLocation,
createUserAccess)


admin.put('/password/:email',updatePassword)

module.exports = admin




