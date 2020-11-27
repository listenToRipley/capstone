const mysql = require('mysql')
const pool = require('../../../sql/connection')
const {handleSQLError} = require('../../../sql/error')
//items related to merges 

//GET
const mergeStatus = (req, res) => {
  //the mergerRequester or mergePal = to user

  let sql='SELECT * FROM mergeRequests WHERE approved=1 AND requester=? OR mergePal=?'

  sql=mysql.format(sql, [req.user, req.user])

  pool.query(sql, (err, row) => {
    if(err) return handleSQLError(res, err)
    let total = row.length
    if (total===0) {
      return res.send('There are not current merges for this user')
    } else {
      return res.json(row); 
    }
  })

}

module.exports = {
  mergeStatus
}