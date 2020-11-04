const express = require('express')
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
  testPassword
} = require('../controller/appFunc/password/password')

const admin = express.Router({mergeParams: true})

//GET
admin.get('/:email', forgotUsername)

//POST
admin.post('/createUser', verifyUsername, verifyEmail, createUser)
admin.post('/testPassword', testPassword)

//PUT
admin.put('/password/:email', updatePassword)

module.exports = admin




