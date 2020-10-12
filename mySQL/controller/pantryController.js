const mysql = require('mysql')
const pool = require('../sql/connection')
const { handleSQLError } = require('../sql/error')
//this will pull the pantry state

//GET
const getAllPantries = (req, res) => {
    console.log('get all pantries')
//write a query to returns all the pantries
}

const getPantry = (req, res) => {
    console.log('return the pantry of the user currently logged in')
//write a query the returns the pantry of the current user
}

//POST
const addToPantry = (req, res) => {
    console.log('add items to the pantry')
//write a query for adding items to the pantry
}

const removeFromPantry = (req, res) => {
    console.log('remove from the pantry')
//write a query for removing an item from the pantry 
}

//PUT 
const updatePantryItem = (req, res) => {
    console.log('update items in the pantry')
//write a query that updates an items from the pantry 
    //should there be a put for each column? 
}


module.exports = {
    getAllPantries,
    getPantry,
    addToPantry,
    removeFromPantry,
    updatePantryItem
}