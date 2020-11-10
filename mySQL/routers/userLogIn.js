const express = require('express')
const start = express.Router({mergeParams: true})


const {login} = require('../controller/admin/userVerification')
const user = require('./userDetails')
const merge = require('./merge')
const palList = require('./palList')
const pantry = require('./pantry')
const shopList = require('./shopList')
const admin = require('./admin')
const requests = require('./requests')
const {auth}= require('../middleware/auth')

start.get('/:user/:password', login)
 
start.use('/:user/current', auth, user)
start.use('/:user/merge', auth, merge)
start.use('/:user/palList', auth, palList)
start.use('/:user/pantry', auth, pantry)
start.use('/:user/shopList', auth, shopList)
start.use('/:user', auth, admin)
start.use('/:user', auth, requests)


module.exports = start
