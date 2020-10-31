require('dotenv').config()
const express = require('express')
const port = process.env.PORT || 4001
const bodyParser = require('body-parser')
const app = express()
<<<<<<< HEAD
const user = require('./routers/postLogin')
const newUser = require('./routers/loginProcess')
=======
const user = require('./routers/userLogIn')
>>>>>>> parent of 597c9da... moved the create on users to its own route

app.get('/', (req, res) => {
  res.send('Welcome to the Pantry Pal Server!')
})

//need to connect up your sql and have the basic routes
//remember to have the route protected
//should be prefixed by your role, MOU
app.use(bodyParser.json())

app.use('/', user)


app.listen(port, () => {
  console.log(`Under your backend, you are currently listening on port ${port}`)
})