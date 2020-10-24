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
} = require('../controller/palListController')
const { route } = require('./admin')
const router = express.Router()

//GET
router.get('/pals/:username', myPalList)
router.get('/viewSent/:username', viewSentReq)
route.get('/viewPending/:username', viewPendingReq)

//POST
router.post('/req/',sendPalReq)
router.post('/block/', blockPal)

//PUT
router.put('/accept/:boo', acceptPalReq)
router.put('/decline/:boo', declinePalReq)
router.put('/unblock/:boo', unblockPal)
router.put('/updateName/:name', updatePalListName)
router.put('/updateRoles', updatePalRole)

//DELETE

module.exports = router