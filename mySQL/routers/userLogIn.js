const express = require('express')
const app = express()
const router = express.Router({mergeParams: true})
const bodyParser = require('body-parser')

const {login} = require('../controller/userId')
const user = require('./userRouter')
const merge = require('./merge')
const palList = require('./palList')
const pantry = require('./pantry')
const shopList = require('./shopList')

router.get('/', login)

app.use('/is', user)
app.use('/merge', merge)
app.use('/palList', palList)
app.use('/pantry', pantry)
app.use('/shopList', shopList)


module.exports = router