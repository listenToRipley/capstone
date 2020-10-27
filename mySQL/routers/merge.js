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
const merger = express.Router({mergeParams: true})

//GET
merger.get('/status', mergeStatus)
merger.get('/pantry', mergePantry)
merger.get('/shopList', mergedShopList)

//POST
merger.post('/sendRequest/', sendMergeReq )

//PUT
merger.put('/accept/:boo', acceptMergeReq)
merger.put('/decline/:boo', declineMergeReq)
merger.put('/reverse/:boo', reverseMerge)

//DELETE


module.exports = merger



