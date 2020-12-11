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
  updatePalsListAccess,
  deactivatePantry,
  deactivateShopList,
  pantryMergeStatus,
  shopListMergeStatus
} = require('../../controller/appFunc/merge/acceptMergeReq')

const merge = express.Router({mergeParams: true})

merge.get('/status', mergeStatus)


merge.post('/req', sendMergeReq)

merge.put('/accept/:mergeId',   acceptMergeReq,
acceptAccess,
deactivateAccess,
copyPantry,
copyShopList,
updatePalsListAccess,
deactivatePantry,
deactivateShopList,
pantryMergeStatus,
shopListMergeStatus)

merge.put('/decline/:mergeId', declineMergeReq)

module.exports = merge