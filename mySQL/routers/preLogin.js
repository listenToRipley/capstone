const express = require('express')
const {
  createUser
} = require('../controller/preLogin')
const router = express.Router()

//GET

//POST
router.post('/newUser', createUser)
//PUT

//DELETE

module.exports = router