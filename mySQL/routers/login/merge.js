const express = require('express')
const {
  mergeStatus
} = require('../../controller/appFunc/merge/mergeStatus')

const {
  sendMergeReq,
  declineMergeReq,
} = require('../../controller/appFunc/merge/mergeActions')

const {
  acceptMergeReq,
  acceptAccess,
  deactivateAccess,
  copyPantry,
  copyShopList,
  deactivatePantry,
  deactivateShopList,
  pantryMergeStatus,
  shopListMergeStatus
} = require('../../controller/appFunc/merge/acceptMergeReq')

const merge = express.Router({mergeParams: true})

//GET
merge.get('/status', mergeStatus)


//POST
merge.post('/', sendMergeReq)

//PUT
merge.put('/:mergeId',   acceptMergeReq,
acceptAccess,
deactivateAccess,
copyPantry,
copyShopList,
deactivatePantry,
deactivateShopList,
pantryMergeStatus,
shopListMergeStatus)
merge.put('/:mergeId', declineMergeReq)

//DELETE

module.exports = merge