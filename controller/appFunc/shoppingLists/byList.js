const mysql = require('mysql')
const pool = require('../../../sql/connection')
const { handleSQLError } = require('../../../sql/error')

const shopListCount = (req, res) => {

  let sql= 'SELECT COUNT(item) FROM shoppingLists WHERE shopList= ?'

  sql=mysql.format(sql, [req.params.listId])

  pool.query(sql, (err, row) => {
    if(err) return handleSQLError(res, err)

    return res.json(row)
  })

}

const thisShopList = (req, res) => {

let sql = 'SELECT sLS.shopListName,sL.entryId, sL.quantity, m.short AS measId, sL.item, sL.spoonId, sL.activeItem, sL.reqItem FROM shoppingLists AS sL LEFT JOIN measurements AS m ON sL.measId=m.measurementId JOIN shopListsSettings AS sLS ON sLS.shopListSetId=sL.shopList WHERE sL.activeItem=1 AND sL.shopList=? ORDER BY sL.item'

sql=mysql.format(sql,[req.params.listId])

pool.query(sql, (err, row) => {
  if(err) return handleSQLError(res, err)
  return res.json(row); 
})  

}


const addToShopList = (req, res) => {

  const { quantity, measure, item, spoon} = req.body
  const {listId} = req.params

  console.log('input looks okay on add to shop list>', req.body)

  let sql = 'INSERT INTO shoppingLists (shopList, quantity, measId, item, spoonId) VALUES (?, ?, ?, ?, ?) '
  
  sql = mysql.format(sql, [listId, quantity, measure, item, spoon])
  pool.query(sql, (err, results) => {
    if(err) return handleSQLError(res, err)
    return res.json( { newItemId: results.insertId} )
  })

}

module.exports = {
  shopListCount,
  thisShopList,
  addToShopList
}