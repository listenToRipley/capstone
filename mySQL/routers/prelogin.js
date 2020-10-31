const express = require('express')
const creation = express.Router({mergeParams: true})
const {
  verifyCreation,
  createUser,
  forgotPassword,
  forgotUsername
} = require('../controller/preLogin')

//GET
creation.get('/:username', verifyCreation)
creation.get('/:email', forgotUsername)

//POST
creation.post('/', createUser)

//PUT
creation.put('/:username', forgotPassword)

module.exports = creation