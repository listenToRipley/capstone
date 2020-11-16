const { request } = require('express')
const express = require('express')
const requests = express.Router({mergeParams: true})

const {
  reqCount,
  viewShopRequests,
  addShopRequest,
  approveShopRequest,
  declineShopRequest
} = require('../../controller/appFunc/shoppingLists/requests')

//GET 
requests.get('/reqCount', reqCount)
requests.get('/viewReqs', viewShopRequests)

//POST
requests.post('/addReq', addShopRequest)

//PUT
requests.put('/approveReq/:reqId', approveShopRequest)
requests.put('/declineReq/:reqId', declineShopRequest)

module.exports = requests