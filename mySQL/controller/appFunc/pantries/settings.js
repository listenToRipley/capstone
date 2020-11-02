const mysql = require('mysql')
const pool = require('../../../sql/connection')
const { handleSQLError } = require('../../../sql/error')

//GET

//POST

//PUT
const updateTitle = (req, res) => {
  //update the name on this, only owner and co-owner 
  let {title} = req.body

  let sql = 'UPDATE pantriesSettings SET pantryName= ? WHERE pantrySettingId = ? '
  //~~make sure the path includes the id of this list
  sql=mysql.format(sql [ title, id ])

  pool.query(sql, (err, results) => {
    if (err) return handleSQLError(res, err)
    return res.status(204).json();
  })

}

const updateAutoAddShop = (req, res) => {
//update the auto add to shopping list is turned off or on 
let {autoAdd} = req.body

let sql ='UPDATE pantriesSettings SET autoAdd= ?  WHERE pantrySettingId= ? '

sql= mysql.format(sql, [autoAdd, req.body.id])

}

module.exports = {
  updateAutoAddShop
}
