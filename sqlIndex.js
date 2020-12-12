require('dotenv').config()
const path = require('path');
const express = require('express')
const port = process.env.PORT || 3000
const publicPath = path.join(__dirname, '..', 'public');
const bodyParser = require('body-parser')

const app = express()

const log = require('./routers/login/logIn')
const preLogin = require('./routers/pre/admin')
const postLogin = require('./routers/login/currentUser')

app.use(express.static("client/build"));

app.get('/', (req, res) => {
  res.send('Welcome to the Pantry Pal Server!')
})

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
app.use(express.json())


app.use('/login', log)
app.use('/preLogin',preLogin)
app.use('/postLogin', postLogin)



app.listen(port, () => {
  console.log(`Under your backend, you are currently listening on port ${port}`)
})