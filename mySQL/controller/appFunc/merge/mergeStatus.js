const mysql = require('mysql')
const pool = require('../../../sql/connection')
const {handleSQLError} = require('../../../sql/error')
//items related to merges 

//GET
const mergeStatus = (req, res) => {
  console.log('return the status of the user`s merge')
//write a query that returns the merge status of the current user  -
  //call on table palList, appInfo, mergeRequest 
  //the mergerRequester or mergePal = to username
  let sql='SELECT * FROM mergeRequests WHERE approved=1 AND requester=? OR mergePal=?'

  sql=mysql.format(sql, [req.params.username, req.params.username])

  pool.query(sql, (err, row) => {
    if(err) return handleSQLError(res, err)
    return res.json(row); 
  })

  //if the rows = 0 then it is false and all requests can be processed as through the user is the owner of everything
}

module.exports = {
  mergeStatus
}