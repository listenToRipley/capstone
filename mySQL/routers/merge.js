const express = require('express')
const {
  mergeStatus
} = require('../controller/appFunc/merge/mergeStatus')

const {
  sendMergeReq,
  declineMergeReq,
} = require('../controller/appFunc/merge/mergeActions')

const {
  acceptMergeReq
} = require('../controller/appFunc/merge/acceptMergeReq')

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