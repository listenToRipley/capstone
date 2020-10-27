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
const router = express.Router()

//GET
router.get('/pals', myPalList)
router.get('/viewSent', viewSentReq)
router.get('/viewPending', viewPendingReq)

//POST
router.post('/req/',sendPalReq)
router.post('/block/', blockPal)

//PUT
router.put('/accept/:reqId', acceptPalReq)
router.put('/decline/:reqId', declinePalReq)
router.put('/unblock/:reqId', unblockPal)
router.put('/updateName/:name', updatePalListName)
router.put('/updateRoles', updatePalRole)

//DELETE

module.exports = router