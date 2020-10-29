const express = require('express')
const router = express.Router()
const {
  createUser,
  forgotPassword,
  forgotUsername
} = require('../controller/preLogin')

router.get('/')

router.post('/user', createUser)
router.put('/passwordReset', forgotPassword)
router.put('/username', forgotUsername)

module.exports = router