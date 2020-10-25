const express = require('express')
const {
  mergeStatus,
  mergePantry, 
  mergedShopList,
  sendMergeReq,
  acceptMergeReq,
  declineMergeReq,
  reverseMerge
} = require('../controller/merge')
const router = express.Router()

//GET
router.get('/status', mergeStatus)
router.get('/pantry', mergePantry)
router.get('/shopList', mergedShopList)

//POST
router.post('/sendRequest/', sendMergeReq )

//PUT
router.put('/accept/:boo', acceptMergeReq)
router.put('/decline/:boo', declineMergeReq)
router.put('/reverse/:boo', reverseMerge)

//DELETE


module.exports = router



