const express = require('express')
const requests = express.Router({mergeParams: true})

const {
  reqCount,
  viewShopRequests,
  viewSentRequests,
  addShopRequest,
  declineShopRequest
} = require('../../controller/appFunc/shoppingLists/requests')

const {
  approveReq,
  addToShopList
} = require('../../controller/appFunc/shoppingLists/reqApproved')

//GET 
requests.get('/reqCount', reqCount)
requests.get('/viewReqs', viewShopRequests)
requests.get('/viewSent', viewSentRequests)

//POST
requests.post('/addReq', addShopRequest)

//PUT
requests.put('/approveReq/:reqId',   approveReq,
addToShopList)
requests.put('/declineReq/:reqId', declineShopRequest)

module.exports = requests