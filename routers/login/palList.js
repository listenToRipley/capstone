const express = require('express')
const {
  palList
} = require('../../controller/appFunc/palLists/usersPalList')

const {
  updatePalListName,
  updatePalRole
} = require('../../controller/appFunc/palLists/settings')

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

pals.get('/pals/:user', palList)
pals.get('/viewSent', viewSentReq)
pals.get('/viewPending', viewPendingReq)

pals.post('/req',sendPalReq)

pals.put('/accept/:reqId', 
acceptPalReq,
updateRequesterAccess,
addToRequesterPalList,
addPalAccess,
addToPalsPalList)
pals.put('/decline/:reqId', declinePalReq)
pals.put('/upName', updatePalListName)
pals.put('/upRole/:accessId', updatePalRole)

module.exports = pals