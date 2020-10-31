const express = require('express')
const {
  mergeStatus,
  mergePantry, 
  mergedShopList,
  sendMergeReq,
  acceptMergeReq,
  declineMergeReq,
  reverseMerge
} = require('../controller/merge/merge')
const merge = express.Router({mergeParams: true})

//GET
merge.get('/', mergeStatus)


//POST
merge.post('/:pal', sendMergeReq)

//PUT
// router.put('/updateStatus', updateActiveStat)

//DELETE

module.exports = merge