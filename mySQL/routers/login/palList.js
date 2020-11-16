const express = require('express')
const {
  myPalList,
  updatePalListName,
  updatePalRole
} = require('../../controller/appFunc/palLists/usersPalList')

const {
  viewPendingReq,
  viewSentReq,
  sendPalReq,
  declinePalReq
} = require('../../controller/appFunc/palLists/requests')

const {
  acceptPalReq,
  updateRequesterAccess,
  addToRequesterPalList,
  addPalAccess,
  addToPalsPalList
} = require('../../controller/appFunc/palLists/acceptPalReq')

const pals = express.Router({mergeParams: true})

//GET
pals.get('/pals/:user', myPalList)
pals.get('/viewSent', viewSentReq)
pals.get('/viewPending', viewPendingReq)

//POST
pals.post('/req/',sendPalReq)

//PUT
pals.put('/accept/:reqId', 
acceptPalReq,
updateRequesterAccess,
addToRequesterPalList,
addPalAccess,
addToPalsPalList)
pals.put('/decline/:reqId', declinePalReq)
pals.put('/updateName/:name', updatePalListName)
pals.put('/updateRoles/:accessId', updatePalRole)

//DELETE

module.exports = pals