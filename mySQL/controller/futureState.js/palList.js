const mysql = require('mysql')
const pool = require('../../../sql/connection')
const {handleSQLError} = require('../../../sql/error')

const blockPal = (req, res) => {
  console.log('block a user')
//write a query for blocking a user 
//this will be future state. 
}

const unblockPal = (req, res) => {
  console.log('unblock a user')
//write a query for blocking a user 
//this will be future state
}

module.exports = {
  blockPal,
  unblock
}

module.exports = {
  blockPal,
  unblock
}