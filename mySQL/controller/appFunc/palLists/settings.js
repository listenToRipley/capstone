const mysql = require('mysql')
const pool = require('../../../sql/connection')
const {handleSQLError} = require('../../../sql/error')

//POST
const updatePalListName = (req, res) => {
  console.log('update the list name  now')

  const {name} = req.body

  //write a query to update the users palListName
  sql='UPDATE palListsSettings SET palListName=? WHERE owner=?'

  sql=mysql.format(sql, [name, req.user])

  pool.query(sql, (err, results) => {
    if (err) return handleSQLError(res, err)
    return res.status(204).json();
  })

}

//PUT
const updatePalRole = (req, res) => {
  console.log('you have update what the pal can do on your list')
  const {accessId} = req.params
  const {role} = req.body

  //this will only be for editors and change back to requesters for right now. 
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