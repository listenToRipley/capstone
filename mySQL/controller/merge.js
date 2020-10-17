const mysql = require('mysql')
const pool = require('../sql/connection')
const {handleSQLError} = require('../sql/error')
//items related to merges 

//GET
const allMerges = (req, res) => {
  console.log('my whole merge table')
//write a query that returns all your merges 
  //call on table mergeRequest
}

const getMergeStatus = (req, res) => {
  console.log('return the status of the user`s merge')
//write a query that returns the merge status of the current user  
  //call on table appInfo, mergeRequest where the mergerRequester or mergePal = to username
}

//POST
const sendMergeReq = (req, res) => {
  console.log('send a merge')
//write a query that send a merge request
  //call on mergeRequest
}

const acceptMergeReq = (req, res) => {
  console.log('accept merge request')
//write a query that accepts a merge 
//call on tables mergeRequest, palList
  //must update the role if the merge request is approved. will become co-owner 
}

const declineMergeReq = (req, res) => {
  console.log('decline merge request')
//write query that decline a merge 
}

//PUT
const reverseMerge = (req, res) => {
  console.log('reverse request')
//write a query that reverses that request 
}

module.exports = {
  allMerges,
  getMergeStatus,
  sendMergeReq,
  acceptMergeReq,
  declineMergeReq,
  reverseMerge
}