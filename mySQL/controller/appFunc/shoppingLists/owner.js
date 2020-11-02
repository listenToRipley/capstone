const mysql = require('mysql')
const pool = require('../../../sql/connection')
const { handleSQLError } = require('../../../sql/error')

myShopListDetails = (req, res) => {
  let sql = 'SELECT * FROM shopListsSettings WHERE owner = ? '

  sql= mysql.format(sql, [req.params.username])

  pool.query(sql, (err, row) => {
    if(err) return handleSQLError(res, err)
    return res.json(row); 
  })  
  
}

const myShoppingListContents = (req, res) => {
  let sql = 'SELECT * FROM shoppingLists WHERE shopList=(SELECT shopListSetId FROM shopListsSettings WHERE owner= ? )'

  sql=mysql.format(sql, [req.params.username])

  pool.query
}

//POST
const myShopListAdd = (req, res) => {

  const {quantity, measId, item, spoonId} = req.body

  let sql = 'INSERT INTO pantries (shopList, quantity, measId, item, spoonId) VALUES ( (SELECT shopListSetId FROM shopListsSettings WHERE owner= ? ), ? , ?, ?, ?)'

  sql=mysql.format(sql, [req.params.username, quantity, measId, item, spoonId ])
}

//PUT


module.exports = {
  myPantryDetails,
  myPantryContents
}

module.exports = {

}