const express = require('express')
const {
  mergeStatus,
  sendMergeReq,
  acceptMergeReq,
  declineMergeReq,
} = require('../controller/merge/merge')
const merge = express.Router({mergeParams: true})

//GET
merge.get('/', mergeStatus)


//POST
merge.post('/', sendMergeReq)

//PUT
merge.put('/:mergeId', acceptMergeReq)
merge.put('/:mergeId', declineMergeReq)

//DELETE

module.exports = merge