const express = require('express')
const {
  forgotUsername,
  validateLogIn
} = require('../controller/admin/admin')

const {
  createUser
} = require('../controller/admin/createNewUser')

const {
  updatePassword,
  testPassword
} = require('../controller/appFunc/password/password')

const admin = express.Router({mergeParams: true})

//GET
admin.get('/:email', forgotUsername)
admin.get('/validation', validateLogIn)

//POST
admin.post('/createUser', createUser)
admin.post('/testPassword/', testPassword)

//PUT
admin.put('/password/:email', updatePassword)

module.exports = admin


  


