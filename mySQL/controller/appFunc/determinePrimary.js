const mysql = require('mysql')
const pool = require('../../sql/connection')
const {handleSQLError} = require('../../sql/error')

//GET 
const findOwner = (res, req) => {
  //determine if the primary list is actually owned by the person currently logged in 
  let sql = 'SELECT COUNT(*) FROM access WHERE active=1 AND pantryRole=2 AND shopListRole=2 AND username= ? ; '

  sql= mysql.format(sql, [req.params.username] )
  
  pool.query(sql, (err, row) => {
    if (err) return handleSQLError(res, err)

    if(res.json(row)>0) {
      res.send('This person is not an owner on any lists currently') //should get reroute to create a login 
    } else {
      next()
    }
  })
}