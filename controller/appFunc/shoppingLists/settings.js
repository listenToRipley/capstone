const mysql = require('mysql')
const pool = require('../../../sql/connection')
const { handleSQLError } = require('../../../sql/error')

const updateListName = (req, res) => {

  const {listId} = req.params
  const {title} = req.body
  
  let sql ='UPDATE shopListsSettings SET shopListName=?  WHERE shopListSetId=? '

  sql= mysql.format(sql, [title, listId])

  pool.query(sql, (err, row) => {
    if(err) return handleSQLError(res, err)
    return res.status(204).json()
  })
}

const updateAutoAddShop = (req, res) => {

  const {listId} = req.params
  const {boo} = req.body
  
  let sql ='UPDATE shopListsSettings SET autoAdd=? WHERE shopListSetId= ? '
  
  sql= mysql.format(sql, [boo, listId])
  pool.query(sql, (err, row) => {
    if(err) return handleSQLError(res, err)
    return res.status(204).json()
  })
  }


module.exports = {
  updateListName,
  updateAutoAddShop
}