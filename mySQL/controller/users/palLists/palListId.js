const mysql = require('mysql')
const pool = require('../../../sql/connection')
const {handleSQLError} = require('../../../sql/error')

//GET
const palId = (req, res) => {
  console.log('just your pal list id')

  sql='SELECT palListSettingsId AS palId FROM palListsSettings WHERE owner=?'

  sql=mysql.format(sql, [req.params.username])

  pool.query(sql, (err, row) => {
    if(err) handleSQLError(res, err)
    return res.json(row)
  })
}

module.exports = {
  palId
}