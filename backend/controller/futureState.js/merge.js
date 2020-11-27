const mysql = require('mysql')
const pool = require('../../../sql/connection')
const {handleSQLError} = require('../../../sql/error')
//items related to merges 

//this is future state
const mergePantry = (req, res) => {
  console.log('return the merged pantry and the co-owner and your primary pantry')
}

const mergedShopList = (req, res) => {
  console.log('return the shopping list as the co-owner as your primary pantry') 
}

//this will be future state for now
const reverseMerge = (req, res) => {
  console.log('reverse request')
//write a query that reverses that request 
//the merge can be reversed by either the owner or co owner. 
//a copy of the pantry should be made to the previous co-owner and their owning primary list should be reactivated 
}
