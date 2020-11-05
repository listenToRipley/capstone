require('dotenv').config()
const express = require('express')
const port = process.env.PORT || 4001
const bodyParser = require('body-parser')
const app = express()

const user = require('./routers/userLogIn')
const preLogin = require('./routers/admin')


app.get('/', (req, res) => {
  res.send('Welcome to the Pantry Pal Server!')
})

//need to connect up your sql and have the basic routes
//remember to have the route protected
//should be prefixed by your role, MOU
app.use(bodyParser.urlencoded({extended: false}))

app.use('/postLogin', user)

app.use('/preLogin', preLogin)



app.listen(port, () => {
  console.log(`Under your backend, you are currently listening on port ${port}`)
})