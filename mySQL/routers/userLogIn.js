const express = require('express')
const app = express()
const router = express.Router()
const bodyParser = require('body-parser')

const {login} = require('../controller/userId')
const user = require('./userDetails')
const merge = require('./merge')
const palList = require('./palList')
const pantry = require('./pantry')
const shopList = require('./shopList')

router.get('/login', login)

app.get('/just', user)
app.use('/merge', merge)
app.use('/palList', palList)
app.use('/pantry', pantry)
app.use('/shopList', shopList)


module.exports = router