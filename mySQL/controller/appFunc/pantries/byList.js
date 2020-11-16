const mysql = require('mysql')
const pool = require('../../../sql/connection')
const { handleSQLError } = require('../../../sql/error')

//GET
const pantryDetails = (req, res) => {

  let sql = 'SELECT owner, pantryName, autoAdd, mergeStatus FROM pantriesSettings WHERE active=1 AND pantrySettingId=?'
  
  sql=mysql.format(sql, [req.params.pantryId])
  
  pool.query(sql, (err, row) => {
    if (err) handleSQLError(res, err)
  
    return res.json(row)
  })
  
  }

  //may have to refactor this as an access point, a secondary token? Lets see how it works first 
const pantryAccess = (req, res) => {

let sql = 'SELECT a.pantry, pS.owner, a.username AS pals, a.pantryRole, a.palReq, pS.autoAdd, pS.mergeStatus FROM pantriesSettings AS pS JOIN access AS a ON a.pantry=pS.pantrySettingId WHERE a.active=1 AND pS.active=1 AND a.username<>pS.owner AND a.pantry= ? ORDER BY a.username'

sql=mysql.format(sql, [req.params.pantryId])

pool.query(sql, (err, row) => {
  if (err) handleSQLError(res, err)

  return res.json(row)
})

}

const pantryCount = (req, res) => {

  let sql = 'SELECT COUNT(entryId) AS itemCount FROM pantries WHERE stock=1 AND pantry=?'

  sql = mysql.format(sql, [req.params.pantryId])

  pool.query(sql, (err, row) => {
    if(err) handleSQLError(res, err) 

    return res.json(row)
  })

}

const pantryItems = (req, res) => {

let sql = 'SELECT entryId, quantity, measId, item, spoonId FROM pantries WHERE stock=1 AND pantry= ? ORDER BY item' 

sql=mysql.format(sql,[req.params.pantryId])

pool.query(sql, (err, row) => {
if(err) return handleSQLError(res, err)
return res.json(row); 
})  

}

//POST
const addToPantry = (req, res) => {
  console.log('add items to the pantry')
//write a query for adding items to the pantry

//the only field that is required is the item field, null is acceptable for all other fields 
//pantry should be a param
const { quantity, measId, item, spoonId} = req.body
const {pantryId} = req.params

let sql ='INSERT INTO pantries (pantry, quantity, measId, item, spoonId) VALUES ( ?, ? , ?, ?, ?);'

sql=mysql.format(sql,[ pantryId, quantity, measId, item, spoonId ])

pool.query(sql, (err, results) => {
if (err) return handleSQLError(res, err)
return res.status(204).json();
})
}


//PUT

module.exports = {
  pantryDetails,
  pantryAccess,
  pantryCount,
  pantryItems,
  addToPantry
}