const mysql = require('mysql')
const pool = require('../../../sql/connection')
const { handleSQLError } = require('../../../sql/error')

//GET
const shopListDetails = (req, res) => {

  let sql='SELECT a.shopList, sLS.owner, sLS.shopListName, a.username AS pals, a.shopListRole, a.palReq, sLS.autoAdd, sLS.mergeStatus FROM shopListsSettings AS sLS JOIN access AS a ON a.shopList=sLS.shopListSetId WHERE a.active=1 AND sLS.active=1 AND a.username<>sLS.owner AND a.shopList= ? ORDER BY a.username'

  sql=mysql.format(sql, [req.params.listId])

  pool.query(sql, (err, row) => {
    if(err) return handleSQLError(res, err)

    return res.json(row);
  })

}

const shopListCount = (req, res) => {

  let sql= 'SELECT COUNT(item) FROM shoppingLists WHERE shopList= ?'

  sql=mysql.format(sql, [req.params.listId])

  pool.query(sql, (err, row) => {
    if(err) return handleSQLError(res, err)

    return res.json(row)
  })

}

const thisShopList = (req, res) => {

let sql = 'SELECT * FROM shoppingLists WHERE activeItem=1 AND shopList= ? ORDER BY item '

sql=mysql.format(sql,[req.params.listId])

pool.query(sql, (err, row) => {
  if(err) return handleSQLError(res, err)
  return res.json(row); 
})  

}

//POST
const addToShopList = (req, res) => {
  console.log('add item to the shopping list')
//write a query that add items to the list
  const { quantity, measure, item, spoon} = req.body
  const {listId} = req.params

  let sql = 'INSERT INTO shoppingLists (shopList, quantity, measId, item, spoonId) VALUES (?, ?, ?, ?, ?) '
  
  sql=mysql.format(sql, [ listId, quantity, measure, item, spoon ])

  pool.query(sql, (err, row) => {
    if(err) return handleSQLError(res, err)
    return res.json( { newId: results.insertId} );
  })

}

//PUT

module.exports = {
  shopListDetails, 
  shopListCount,
  thisShopList,
  addToShopList
}