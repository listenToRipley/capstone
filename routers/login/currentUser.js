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

currentUser.use('/current', user)
currentUser.use('/merge', merge)
currentUser.use('/palList', palList)
currentUser.use('/pantry', pantry)
currentUser.use('/shopList', shopList)
currentUser.use('/admin', requests)
currentUser.use('/util', util)

module.exports = currentUser
