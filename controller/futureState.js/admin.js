const mysql = require('mysql')
const pool = require('../../sql/connection')
const { handleSQLError } = require('../../sql/error')

//PUT
const updateActiveStat = (req, res) => {
  console.log('you have not deactivated a user')
  //call on table user, column active
  const { boo, user } = req.body //if deactivating, should be 0, if active 1 

  let sql = 'UPDATE appInfo SET active=? WHERE username=?'

  sql=mysql.format(sql,[boo, user])

  pool.query(sql, (err, results) => {
    if (err) return handleSQLError(res, err)
    return res.status(204).json();
  })
}

export {
  updateActiveStat
}