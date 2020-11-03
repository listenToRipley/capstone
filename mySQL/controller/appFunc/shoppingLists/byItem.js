const mysql = require('mysql')
const pool = require('../../../sql/connection')
const { handleSQLError } = require('../../../sql/error')

//GET

//POST

//PUT
const removeFrom = (req, res) => {
  console.log('remove item to the shopping list')
//write a query that add items to the list
let sql='UPDATE shopList SET stock=0 where entryId=?'

sql=mysql.format(sql,[req.params.id])

pool.query(sql, (err, results) => {
  if (err) return handleSQLError(res, err)
  return res.status(204).json();
})
}

const updateItem = (req, res) => {
  console.log('update item on list')
  //write a query that updates an item on the list 
  const {quantity, measId, item, spoonId} = req.body

let sql='UPDATE shopList SET quantity=COALESCE( ? , quantity), measId=(COALESCE( ? , measId)), item=(COALESCE( ? , item)), spoonId=(COALESCE( ? , spoonId)) WHERE entryId= ? '


sql=mysql.format(sql, [quantity, measId, item, spoonId, req.params.id])

pool.query(sql, (err, results) => {
    if(err) return handleSQLError(res, err)

    return res.status(204).json();
})

}

module.exports = {
  removeFrom,
  updateItem
}