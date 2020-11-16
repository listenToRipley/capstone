const mysql = require('mysql')
const pool = require('../../../sql/connection')
const { handleSQLError } = require('../../../sql/error')

//POST
const autoAddToShopList = (req, res) => {
  //this will add be triggered when an items gets marked off the list and auto add is on

  const { itemId } = req.params

  let sql = 'INSERT INTO shoppingLists (shopList, quantity, measId, item, spoonId) VALUES ((SELECT shopList FROM access WHERE pantryRole=2 AND pantry=(SELECT pantry FROM pantries WHERE entryId= ?)), (SELECT quantity FROM pantries WHERE entryId=?),(SELECT measId FROM pantries WHERE entryId= ? ),(SELECT item FROM pantries WHERE entryId= ?),(SELECT spoonId FROM pantries WHERE entryId=?))'
  
  sql = mysql.format(sql, [itemId, itemId, itemId, itemId, itemId])
  console.log(sql)

  pool.query(sql, (err, results) => {
    if(err) return handleSQLError(res, err)
    return res.json({shopId: results.insertId});
  })
}

//PUT 
const removeFromPantry = (req, res) => {
    console.log('remove from the pantry')
//write a query for removing an item from the pantry 

let sql='UPDATE pantries SET stock=0 where entryId=?'

sql=mysql.format(sql,[req.params.itemId])

pool.query(sql, (err, results) => {
  if (err) return handleSQLError(res, err)
  return res.status(204).json();
})

}

const updatePantryItem = (req, res) => {
    console.log('update items in the pantry')
//write a query that updates an items from the pantry 
const {quantity, measId, item, spoonId} = req.body
const {itemId} = req.params

let sql='UPDATE pantries SET quantity=COALESCE( ? , quantity), measId=(COALESCE( ? , measId)), item=(COALESCE( ? , item)), spoonId=(COALESCE( ? , spoonId)) WHERE entryId= ? '


sql=mysql.format(sql, [quantity, measId, item, spoonId, itemId])

pool.query(sql, (err, results) => {
    if(err) return handleSQLError(res, err)

    return res.status(204).json();
})

}

const outOf = (req, res) => {
  //make an item be removed from the shopping list 
  let sql = 'UPDATE pantries SET stock=0 WHERE entryId= ?'

  sql= mysql.format(sql, [req.params.itemId])

  pool.query(sql, (err, results) => {
    if(err) return handleSQLError(res, err)

    return res.status(204).json();
})

}

module.exports = {
  autoAddToShopList,
  removeFromPantry,
  updatePantryItem,
  outOf
}