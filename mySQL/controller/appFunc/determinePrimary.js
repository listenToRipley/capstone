const mysql = require('mysql')
const pool = require('../../sql/connection')
const {handleSQLError} = require('../../sql/error')

//GET 
const findOwner = (res, req) => {
  //determine if the primary list is actually owned by the person currently logged in 
  let sql = 'SELECT COUNT(*) FROM access WHERE active=1 AND pantryRole=2 AND shopListRole=2 AND username= ? ; '

  sql= mysql.format(sql, [req.params.user] )
  
  pool.query(sql, (err, row) => {
    if (err) return handleSQLError(res, err)

    return res.json(row)
  })
}

  const findCoOwner = (res, req) => {
    //determine what ths list this person is the co-owner on 
    let sql = 'SELECT shopList, pantry FROM access WHERE active=1 AND pantryRole=3 AND shopListRole=3 AND username= ? ; '

    sql= mysql.format(sql, [req.params.user] )
    
    pool.query(sql, (err, row) => {
      if (err) return handleSQLError(res, err)
      //these are list that should be used for all queries on this individual
      //we also need to use this check for pals when look for their lists
      res.json(row)
  })
}

const findOwnerLists = (req, res) => {
  let sql = 'SELECT shopList, pantry FROM access WHERE active=1 AND pantryRole=2 AND shopListRole=2 AND username= ?'

  sql=mysql.format(sql, [req.params.username])

  pool.query(sql, (err, row) => {
    if(err) return handleSQLError(res, err)
    return res.json(row); 
  })  
  
}

module.exports = {
  findOwner,
  findCoOwner,
  findOwnerLists
}