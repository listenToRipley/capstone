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


// //POST

// //PUT
// router.put('/updateStatus', updateActiveStat)

//DELETE

module.exports = merge