const express = require('express')
const {
  myPalList,
  viewSentReq,
  viewPendingReq,
  sendPalReq,
  acceptPalReq,
  declinePalReq,
  blockPal,
  unblockPal,
  updatePalListName,
  updatePalRole
} = require('../controller/palList')
const pals = express.Router({mergeParams: true})

//GET
pals.get('/pals', myPalList)
pals.get('/viewSent', viewSentReq)
pals.get('/viewPending', viewPendingReq)

//POST
pals.post('/req/',sendPalReq)
pals.post('/block/', blockPal)

//PUT
pals.put('/accept/:reqId', acceptPalReq)
pals.put('/decline/:reqId', declinePalReq)
pals.put('/unblock/:reqId', unblockPal)
pals.put('/updateName/:name', updatePalListName)
pals.put('/updateRoles', updatePalRole)

//DELETE

module.exports = pals