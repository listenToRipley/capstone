const express = require('express')
const palListController = require('../controller/palListController')
const router = express.Router()

//GET
router.get('/pals/:user', palListController.myPalList)

//POST
router.post('/req/',palListController.sendPalReq)
router.post('/block/', palListController.blockPal)

//PUT
router.put('/accept/:boo', palListController.acceptPalReq)
router.put('/decline/:boo', palListController.declinePalReq)
router.put('/unblock/:boo', palListController.unblockPal)
router.put('/updateName/:name', palListController.updatePalListName)
router.put('/updateRoles', palListController.updatePalRole)

//DELETE

module.exports = router