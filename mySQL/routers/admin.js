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
  createUser
} = require('../controller/admin/createNewUser')

const {
  updatePassword,
  // testPassword
} = require('../controller/appFunc/password/password')

const admin = express.Router({mergeParams: false})

//GET
admin.get('/:email', forgotUsername)
admin.get('/vUsername/:user', verifyUsername)
admin.get('/vEmail/:email', verifyEmail)

//POST
admin.post('/createUser', createUser)


//PUT
admin.put('/password/:email',updatePassword)

module.exports = admin




