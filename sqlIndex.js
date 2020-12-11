require('dotenv').config()
const express = require('express')
const port = process.env.PORT || 4001
const bodyParser = require('body-parser')

const app = express()

const log = require('./routers/login/logIn')
const preLogin = require('./routers/pre/admin')
const postLogin = require('./routers/login/currentUser')


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