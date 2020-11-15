const express = require('express')
const {
  myPalList,
  updatePalListName,
  updatePalRole
} = require('../controller/appFunc/palLists/usersPalList')

const {
  viewPendingReq,
  viewSentReq,
  sendPalReq,
  declinePalReq
} = require('../controller/appFunc/palLists/requests')

const {
  acceptPalReq
} = require('../controller/appFunc/palLists/acceptPalReq')

const pals = express.Router({mergeParams: true})
//WOULD IT BE EASIER FOR THESE QUERIES IF HAD THE CURRENT USERS ID FIRST 

//GET
pals.get('/pals', myPalList)
pals.get('/viewSent', viewSentReq)
pals.get('/viewPending', viewPendingReq)

//POST
pals.post('/req/',sendPalReq)

//PUT
pals.put('/accept/:reqId', acceptPalReq)
pals.put('/decline/:reqId', declinePalReq)
pals.put('/updateName/:name', updatePalListName)
pals.put('/updateRoles/:accessId', updatePalRole)

//DELETE

module.exports = pals