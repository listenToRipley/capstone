const mysql = require('mysql')
const pool = require('../../../sql/connection')
const { handleSQLError } = require('../../../sql/error')

//GET COMBINE WITH SHOP LIST ITEMS FOR NOW
// const shopListDetails = (req, res) => {

//   let sql='SELECT a.shopList, sLS.owner, sLS.shopListName, a.username AS pals, a.shopListRole, a.palReq, sLS.autoAdd, sLS.mergeStatus FROM shopListsSettings AS sLS JOIN access AS a ON a.shopList=sLS.shopListSetId WHERE a.active=1 AND sLS.active=1 AND a.username<>sLS.owner AND a.shopList= ? ORDER BY a.username'

//   sql=mysql.format(sql, [req.params.listId])

//   pool.query(sql, (err, row) => {
//     if(err) return handleSQLError(res, err)

//     return res.json(row);
//   })

// }

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

//POST
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