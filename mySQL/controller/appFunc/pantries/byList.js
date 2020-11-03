const mysql = require('mysql')
const pool = require('../../../sql/connection')
const { handleSQLError } = require('../../../sql/error')

//GET
const pantryDetails = (req, res) => {
  //this will be the pantry details for the primary pantry
  const {id} = req.params

let sql = 'SELECT * FROM pantriesSettings WHERE id = ? '

sql=mysql.format(sql, [id])

pool.query(sql, (err, row) => {
  if (err) handleSQLError(res, err)

  return res.json(row)
})

}

const pantryCount = (req, res) => {
  //tell me how much stuff in the pantry
  const {id} = req.params

  let sql = 'SELECT COUNT(entryId) FROM pantries WHERE stock=1 AND pantry=?'

  sql = mysql.format(sql, [id])

  pool.query(sql, (err, row) => {
    if(err) handleSQLError(res, err) 

    return res.json(row)
  })

}

const pantryItems = (req, res) => {
  console.log('return the pantry of the user currently logged in')
//write a query the returns the pantry of the current user

//this needs to account for a merged pantry
let sql = 'SELECT entryId, quantity, measId, item, spoonId FROM pantries WHERE stock=1 AND pantry= ?' 

sql=mysql.format(sql,[req.params.id])

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
const {pantryId, quantity, measId, item, spoonId} = req.body

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
  pantryCount,
  pantryItems,
  addToPantry
}