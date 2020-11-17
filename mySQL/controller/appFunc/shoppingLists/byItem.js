const mysql = require('mysql')
const pool = require('../../../sql/connection')
const { handleSQLError } = require('../../../sql/error')

//GET

//POST
const autoAddToPantry = (req, res) => {

  const {itemId} = req.params

  let sql = 'INSERT INTO pantries (pantry, quantity, measId, item, spoonId) VALUES ((SELECT pantry FROM access WHERE shopListRole=2 AND shopList=(SELECT shopList FROM shoppingLists WHERE entryId=?)), (SELECT quantity FROM shoppingLists WHERE entryId=?),(SELECT measId FROM shoppingLists WHERE entryId= ? ),(SELECT item FROM shoppingLists WHERE entryId= ?),(SELECT spoonId FROM shoppingLists WHERE entryId=?))'

  sql = mysql.format(sql, [itemId, itemId, itemId, itemId, itemId])

  pool.query(sql, (err, results) => {
    if(err) return handleSQLError(res, err)
    return res.json( { newItemId: results.insertId} )
  })
}

//PUT
const removeFrom = (req, res) => {
  console.log('remove item to the shopping list')
//write a query that add items to the list
let sql='UPDATE shopList SET stock=0 where entryId=?'

sql=mysql.format(sql,[req.params.itemId])

pool.query(sql, (err, results) => {
  if (err) return handleSQLError(res, err)
  return res.status(204).json();
})
}

const updateItem = (req, res) => {
  console.log('update item on list')
  //write a query that updates an item on the list 
  const {quantity, measId, item, spoonId} = req.body
  const {itemId} = req.params

let sql='UPDATE shopList SET quantity=COALESCE( ? , quantity), measId=(COALESCE( ? , measId)), item=(COALESCE( ? , item)), spoonId=(COALESCE( ? , spoonId)) WHERE entryId= ? '


sql=mysql.format(sql, [quantity, measId, item, spoonId, itemId])

pool.query(sql, (err, results) => {
    if(err) return handleSQLError(res, err)
    return res.status(204).json();
})

}

const markOff = (req, res) => {
  //make an item be removed from the shopping list 

  let sql = 'UPDATE shoppingLists SET activeItem=0 WHERE entryId= ?'

  sql = mysql.format(sql, [itemId])

  pool.query(sql, (err, results) => {
    if (err) handleSQLError(err, results)

    return res.status(204).json()
  })
}


module.exports = {
  autoAddToPantry,
  removeFrom,
  updateItem,
  markOff
}