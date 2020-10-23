const express = require('express')
const { mergedShopList } = require('../controller/merge')
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
router.get('/status/:user', mergeStatus)
router.get('/pantry/:user', mergePantry)
router.get('/shopList/:user', mergedShopList)

//POST
router.post('/sendRequest/', sendMergeReq )

//PUT
router.put('/accept/:boo', acceptMergeReq)
router.put('/decline/:boo', declineMergeReq)
route.put('/reverse/:boo', reverseMerge)

//DELETE


module.exports = router



