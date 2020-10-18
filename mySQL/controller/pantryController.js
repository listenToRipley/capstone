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
let sql = 'SELECT sL.quanity, sL.item, sL.meas, sL.spoonId, sL.activeItem, sLS.owner, sLS.listName, sLS.active AS listActive, sLS.mergeStatus, sLS.autoAdd AS autoAddToPantry FROM shoppingLists AS sL JOIN shopListSettings AS sLS JOIN palListSettings AS pLS ON sL.listOwner=sLS.shopList AND sLS.owner=? AND sL.activeItem=1; '

sql=mysql.format(sql,[req.params.user])

pool.query(sql, (err, row) => {
  if(err) return handleSQLError(res, err)
  return res.json(row); 
})  

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

const updateAutoAddShop = (req, res) => {
    console.log('update the auto add to the shopping list')
//update the auto add to shopping list is turned off or on 
}


module.exports = {
    getAllPantries,
    getPantry,
    addToPantry,
    removeFromPantry,
    updatePantryItem,
    updateAutoAddShop
}