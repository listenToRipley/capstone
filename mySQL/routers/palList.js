const express = require('express')
const {
  myPalList,
  viewSentReq,
  viewPendingReq,
  sendPalReq,
  acceptPalReq,
  declinePalReq,
  cancelPalReq,
  blockPal,
  unblockPal,
  updatePalListName,
  updatePalRole
} = require('../controller/palListController')
const router = express.Router()

//GET
router.get('/pals', myPalList)
router.get('/viewSent', viewSentReq)
router.get('/viewPending', viewPendingReq)

//POST
router.post('/req/',sendPalReq)
router.post('/block/', blockPal)

//PUT
router.put('/accept/:boo', acceptPalReq)
router.put('/decline/:boo', declinePalReq)
router.put('/cancel/:boo', cancelPalReq)
router.put('/unblock/:boo', unblockPal)
router.put('/updateName/:name', updatePalListName)
router.put('/updateRoles', updatePalRole)

//DELETE

module.exports = router