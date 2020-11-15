const mysql = require('mysql')
const pool = require('../../../sql/connection')
const { handleSQLError } = require('../../../sql/error')

const updateListName = (req, res) => {
  //write a query that update the list name
  const {title} = req.body
  
  let sql ='UPDATE shopListsSettings SET shopListName= ?  WHERE shopListSetId= ? '

  sql= mysql.format(sql, [title, req.user])

  pool.query(sql, (err, row) => {
    if(err) return handleSQLError(res, err)
    return res.status(204).json()
  })
}

const updateAutoAddShop = (req, res) => {
  //update the auto add to shopping list is turned off or on 
  let {autoAdd} = req.body
  
  let sql ='shopListsSettings SET autoAdd=? WHERE shopListSetId= ? '
  
  sql= mysql.format(sql, [autoAdd, req.body.id])
  pool.query(sql, (err, row) => {
    if(err) return handleSQLError(res, err)
    return res.status(204).json()
  })
  }


module.exports = {
  updateListName,
  updateAutoAddShop
}