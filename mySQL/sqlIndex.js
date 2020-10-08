const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const port = process.env.PORT || 4000 

//need to connect up your sql and have the basic routes
//remember to have the route protected
//should be prefixed by your role, MOU