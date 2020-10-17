const mysql = require('mysql')
const pool = require('../sql/connection')
const {handleSQLError} = require('../sql/error')
//this will pull on the pals lists 
//all will pull from pals lists 

//GET
const getAllPals = (req, res) => {
  console.log('return all my pals lists')
//write a query that returns all the pals lists 
}

const getPalList = (req, res) => {
  console.log('get the pal list of the current user ')
//write a query the returns all the friends on the list of the current user
}

//POST
const sendPalReq = (req, res) => {
  console.log('a place to hold request to become friends ')
//write a query for approving or rejects a request 
}

const acceptPalReq = (req, res) => {
  console.log('accept a pal request')
//write a query that accepts a pal req
}

const declinePalReq = (req, res) => {
  console.log('decline a pal request')
//write a query that decline a pal request
}

const blockPal = (req, res) => {
  console.log('block a user')
//write a query for blocking a user 
}

//PUT
const unblockPal = (req, res) => {
  console.log('unblock a user')
//write a query for blocking a user 
}

const updatePalListName = (req, res) => {
  console.log('update the list name  now')
}

const updatePalRole = (req, res) => {
  console.log('you have update what the pal can do on your list')

}


module.exports = {
  getAllPals,
  getPalList,
  sendPalReq,
  acceptPalReq,
  declinePalReq,
  blockPal,
  unblockPal,
  updatePalListName,
  updatePalRole
}