const mysql = require('mysql')
const pool = require('../sql/connection')
const {handleSQLError} = require('../sql/error')
//items related to merges 

//GET
const allMerges = (req, res) => {
  console.log('my whole merge table')
//write a query that returns all your merges 
}

const getMergeStatus = (req, res) => {
  console.log('return the status of the user`s merge')
//write a query that returns the merge status of the current user  
}

//POST
const sendMergeReq = (req, res) => {
  console.log('send a merge')
//write a query that send a merge request
}

const acceptMergeReq = (req, res) => {
  console.log('accept merge request')
//write a query that accepts a merge 
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