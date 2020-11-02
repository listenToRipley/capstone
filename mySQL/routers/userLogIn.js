const express = require('express')
const start = express.Router({mergeParams: true})

const {login} = require('../controller/admin/userVerification')
const user = require('./userDetails')
const merge = require('./merge')
const palList = require('./palList')
const pantry = require('./pantry')
const shopList = require('./shopList')
const admin = require('./admin')


start.get('/:username', login)

start.use('/:username/just', user)
start.use('/:username/merge', merge)
start.use('/:username/palList', palList)
start.use('/:username/pantry', pantry)
start.use('/:username/shopList', shopList)
start.use('/:username', admin)


module.exports = start
