const express = require('express')
const start = express.Router({mergeParams: true})

const {login, createSession} = require('../../controller/admin/userVerification')

const user = require('./userDetails')
const merge = require('./merge')
const palList = require('./palList')
const pantry = require('./pantry')
const shopList = require('./shopList')
const requests = require('./requests')
const util = require('./util')
const {auth}= require('../../middleware/authentication')

start.get('/:user/:password', login, createSession)

start.use('/current', auth, user)
start.use('/merge', auth, merge)
start.use('/palList', auth, palList)
start.use('/pantry', auth, pantry)
start.use('/shopList', auth, shopList)
start.use('/admin', auth, requests)
start.use('/util', auth, util)

module.exports = start
