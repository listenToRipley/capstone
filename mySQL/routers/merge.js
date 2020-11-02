const express = require('express')
const {
  mergeStatus
} = require('../controller/appFunc/merge/mergeStatus')

const {
  sendMergeReq,
  acceptMergeReq,
  declineMergeReq,
} = require('../controller/appFunc/merge/mergeActions')

const merge = express.Router({mergeParams: true})

//GET
merge.get('/mergeStatus', mergeStatus)


//POST
merge.post('/', sendMergeReq)

//PUT
merge.put('/:mergeId', acceptMergeReq)
merge.put('/:mergeId', declineMergeReq)

//DELETE

module.exports = merge