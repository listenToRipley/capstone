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



start.get('/:user/:password', login)

start.use('/:user/current', user)
start.use('/:user/merge', merge)
start.use('/:user/palList', palList)
start.use('/:user/pantry', pantry)
start.use('/:user/shopList', shopList)
start.use('/:user', admin)
start.use('/:user', requests)


module.exports = start
