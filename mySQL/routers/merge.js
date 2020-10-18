const express = require('express')
const { mergedShopList } = require('../controller/merge')
const merge = require('../controller/merge')
const { route } = require('./admin')
const router = express.Router()

//GET
router.get('/status/:user', merge.mergeStatus)
router.get('/pantry/:user', merge.mergePantry)
router.get('/shopList/:user', merge.mergedShopList)

//POST
router.post('/sendRequest/', merge.sendMergeReq )

//PUT
router.put('/accept/:boo', merge.acceptMergeReq)
router.put('/decline/:boo', merge.declineMergeReq)
route.put('/reverse/:boo', merge.reverseMerge)

//DELETE


module.exports = router



