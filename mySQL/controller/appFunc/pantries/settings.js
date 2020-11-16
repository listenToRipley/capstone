const mysql = require('mysql')
const pool = require('../../../sql/connection')
const { handleSQLError } = require('../../../sql/error')

//PUT
const updateTitle = (req, res) => {

  const {pantryId} = req.params
  const {title} = req.body

  let sql = 'UPDATE pantriesSettings SET pantryName=? WHERE pantrySettingId=?'

  sql = mysql.format(sql, [title, pantryId])

  pool.query(sql, (err, results) => {
    if(err) return handleSQLError(res, err)
    return res.status(204).json()
  })

}

const updateAutoAddShop = (req, res) => {
//update the auto add to shopping list is turned off or on 
let {pantryId} = req.params
let {boo} = req.body

let sql ='UPDATE pantriesSettings SET autoAdd= ?  WHERE pantrySettingId= ? '

sql= mysql.format(sql, [boo, pantryId])

}

module.exports = {
  updateAutoAddShop,
  updateTitle
}
