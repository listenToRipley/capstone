require('dotenv').config()
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const port = process.env.PORT || 4000 
const usersRouter = require('./routers/userRouter')
const admin = require('./routers/admin')
const merge = require('./routers/merge')
const palList = require('./routers/palListRouter')
const pantry = require('./routers/pantryRouter')
const shopList = require('./routers/shopListRouter')

//need to connect up your sql and have the basic routes
//remember to have the route protected
//should be prefixed by your role, MOU
app.use(bodyParser.json())
app.use('/users', usersRouter)
app.use('/admin', admin)
app.use('/merge', merge)
app.use('/palList', palList)
app.use('/pantry', pantry)
app.use('/shopList', shopList)

app.get('/', (req, res) => {
  res.send('Welcome to the Pantry Pal Server!')
})

app.listen(port, () => {
  console.log(`Under your backend, you are currently listening on port ${port}`)
})