const express = require('express')
const admin = require('../controller/admin')
const router = express.Router()

//GET
router.get('/' , admin.getAllUsers)

//PUT

//PUSH

//DELETE

module.exports = router