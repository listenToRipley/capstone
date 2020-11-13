const express = require('express')
const start = express.Router({mergeParams: true})


const {login, createSession} = require('../controller/admin/userVerification')
const user = require('./userDetails')
const merge = require('./merge')
const palList = require('./palList')
const pantry = require('./pantry')
const shopList = require('./shopList')
const admin = require('./admin')
const requests = require('./requests')
// const all = require('./all')
const {auth, mou}= require('../middleware/authentication')

start.get('/:user', login, createSession)


// start.use('/all', mou, all) <- needs work, something up

start.use('/current', auth, user)
start.use('/merge', auth, merge)
start.use('/palList', auth, palList)
start.use('/pantry', auth, pantry)
start.use('/shopList', auth, shopList)
start.use('/admin', auth, admin)
start.use('/admin', auth, requests)


module.exports = start
