const express = require('express')
const currentUser = express.Router({mergeParams: true})

const user = require('./userDetails')
const merge = require('./merge')
const palList = require('./palList')
const pantry = require('./pantry')
const shopList = require('./shopList')
const requests = require('./requests')
const util = require('./util')
const {auth}= require('../../middleware/authentication')

currentUser.get('/:user', auth)

currentUser.use('/:user/current', user)
currentUser.use('/:user/merge', merge)
currentUser.use('/:user/palList', palList)
currentUser.use('/:user/pantry', pantry)
currentUser.use('/:user/shopList', shopList)
currentUser.use('/admin', requests)
currentUser.use('/util', util)

module.exports = currentUser
