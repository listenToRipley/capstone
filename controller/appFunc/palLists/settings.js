const mysql = require('mysql')
const pool = require('../../../sql/connection')
const {handleSQLError} = require('../../../sql/error')

//POST
const updatePalListName = (req, res) => {

  const {title} = req.body

  sql='UPDATE palListsSettings SET palListName=? WHERE owner=?'

  sql=mysql.format(sql, [title, req.user])

  pool.query(sql, (err, results) => {
    if (err) return handleSQLError(res, err)
    return res.status(204).json();
  })

}

//PUT
const updatePalRole = (req, res) => {
  
  const {accessId} = req.params
  const {role} = req.body

  sql= 'UPDATE access SET pantryRole=COALESCE(?, pantryRole), shopListRole=pantryRole WHERE accessId=?'

  sql=mysql.format(sql, [role,accessId])

  pool.query(sql, (err, results) => {
    if(err) return handleSQLError(res, err)
    return res.status(204).json()
  })

}


module.exports = {
  updatePalListName,
  updatePalRole
}