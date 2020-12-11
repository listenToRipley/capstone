const express = require('express')
const start = express.Router({mergeParams: true})

const {login, createSession} = require('../../controller/admin/userVerification')

start.use('/:user/:password', login, createSession)

module.exports = start
