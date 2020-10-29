const express = require('express')
const start = express.Router({mergeParams: true})

const {login} = require('../controller/userId')
const user = require('./userDetails')
const merge = require('./merge')
const palList = require('./palList')
const pantry = require('./pantry')
const shopList = require('./shopList')
const admin = require('./admin')


start.get('/:username', login)

start.use('/:username/', user)
start.use('/:username/', merge)
start.use('/:username/', palList)
start.use('/:username/', pantry)
start.use('/:username/', shopList)
start.use('/:username/', admin)


module.exports = start
