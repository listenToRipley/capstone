const mysql = require('mysql')
const pool = require('../../../sql/connection')
const { handleSQLError } = require('../../../sql/error')

//GET
const shopListDetails = (req, res) => {
  //this should be the detailed information about a specific request
  let sql='SELECT * FROM shopListsSettings WHERE shopListSetId= ?'

  sql=mysql.format(sql, [req.params.username])

  pool.query(sql, (err, row) => {
    if(err) return handleSQLError(res, [req.params.username])

    return res.json(row);
  })

}

const thisShopList = (req, res) => {
  console.log('get the shoppingList for this user')
//write a query that returns the shopping List for the user currently logged in  

//this is a work in process, it is not done ~ we need to account for merges 
let sql = 'SELECT * FROM shoppingLists WHERE activeItem=1 AND shopList= ? '

sql=mysql.format(sql,[req.params.id])

pool.query(sql, (err, row) => {
  if(err) return handleSQLError(res, err)
  return res.json(row); 
})  

}

//POST
const addToShopList = (req, res) => {
  console.log('add item to the shopping list')
//write a query that add items to the list
  const { listId, quantity, measure, item, spoon} = req.body

  let sql = 'INSERT INTO shoppingLists (shopList, quantity, measId, item, spoonId) VALUES (?, ?, ?, ?, ?);'
  
  sql=mysql.format(sql, [ listId, quantity, measure, item, spoon ])

  pool.query(sql, (err, row) => {
    if(err) return handleSQLError(res, err)
    return res.json( { newId: results.insertId} );
  })

}

//PUT

module.exports = {
  shopListDetails, 
  thisShopList,
  addToShopList
}