const mysql = require('mysql')
const pool = require('../../sql/connection')
const { handleSQLError } = require('../../sql/error')
//this will pull the pantry state

//GET

const getPantry = (req, res) => {
    console.log('return the pantry of the user currently logged in')
//write a query the returns the pantry of the current user

//this needs to account for a merged pantry
let sql = 'SELECT entryId, quantity, measId, item, spoonId FROM pantries WHERE stock=1 AND pantry= ?' 

sql=mysql.format(sql,[req.params.id])

pool.query(sql, (err, row) => {
  if(err) return handleSQLError(res, err)
  return res.json(row); 
})  

}

//POST
const addToPantry = (req, res) => {
    console.log('add items to the pantry')
//write a query for adding items to the pantry

//the only field that is required is the item field, null is acceptable for all other fields 
const {pantryId, quantity, measId, item, spoonId} = req.body

let sql ='INSERT INTO pantries (pantry, quantity, measId, item, spoonId) VALUES ( ?, ? , ?, ?, ?);'

sql=mysql.format(sql,[ pantryId, quantity, measId, item, spoonId ])

pool.query(sql, (err, results) => {
  if (err) return handleSQLError(res, err)
  return res.status(204).json();
})
}

//PUT 
const removeFromPantry = (req, res) => {
    console.log('remove from the pantry')
//write a query for removing an item from the pantry 

let sql='UPDATE pantries SET stock=0 where entryId=?'

sql=mysql.format(sql,[req.params.id])

pool.query(sql, (err, results) => {
  if (err) return handleSQLError(res, err)
  return res.status(204).json();
})

}

const updatePantryItem = (req, res) => {
    console.log('update items in the pantry')
//write a query that updates an items from the pantry 
const {quantity, measId, item, spoonId} = req.body

let sql='UPDATE pantries SET quantity=COALESCE( ? , quantity), measId=(COALESCE( ? , measId)), item=(COALESCE( ? , item)), spoonId=(COALESCE( ? , spoonId)) WHERE entryId= ? '


sql=mysql.format(sql, [quantity, measId, item, spoonId, req.params.id])

pool.query(sql, (err, results) => {
    if(err) return handleSQLError(res, err)

    return res.status(204).json();
})

}

const updateAutoAddShop = (req, res) => {
    console.log('update the auto add to the shopping list')
//update the auto add to shopping list is turned off or on 
let {autoAdd} = req.body

let sql ='UPDATE pantriesSettings SET autoAdd= ?  WHERE pantrySettingId= ? '

sql= mysql.format(sql, [autoAdd, req.body.id])

}


module.exports = {
    getPantry,
    addToPantry,
    removeFromPantry,
    updatePantryItem,
    updateAutoAddShop
}