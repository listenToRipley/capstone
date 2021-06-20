require('dotenv').config()
const path = require('path');
const express = require('express')
const port = process.env.PORT || 4001
const publicPath = path.join(__dirname, '..', 'public');
const bodyParser = require('body-parser')
var cors = require('cors')

const app = express();
app.use(cors());

const log = require('./routers/login/logIn')
const preLogin = require('./routers/pre/admin')
const postLogin = require('./routers/login/currentUser')

app.use(express.static("client/build"));

app.use('/', express.static(path.join(__dirname, "./client/build")));

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
app.use(express.json())


app.use('/login', log)
app.use('/preLogin',preLogin)
app.use('/postLogin', postLogin)

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, "./client/build", "index.html"))
})

app.listen(port, () => {
  console.log(`Under your backend, you are currently listening on port ${port}`)
})