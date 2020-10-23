const express = require('express')
const {
  myPalList,
  sendPalReq,
  acceptPalReq,
  declinePalReq,
  blockPal,
  unblockPal,
  updatePalListName,
  updatePalRole
} = require('../controller/palListController')
const router = express.Router()

//GET
router.get('/pals/:user', myPalList)

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