const mysql = require('mysql')
const pool = require('../../../sql/connection')
const {handleSQLError} = require('../../../sql/error')
//this will pull on the pals lists 
//all will pull from pals lists 

//GET
const myPalList = (req, res) => {
  console.log('get the pal list of the current user ')
//NEED TO UPDATE TO INCLUDE THE PAL LIST - we need to change this so the roles display and not the index
let sql = 'SELECT DISTINCT pL.username AS pals, pL.reqId AS palReq, pL.palList, pLS.palListName, a.pantryRole, a.shopListRole FROM palLists AS pL JOIN palListsRequests AS pLR JOIN palListsSettings AS pLS JOIN access AS a ON pLR.palRequestId=pL.reqId AND a.palReq=pL.reqId AND pL.palList=pLS.palListSettingsId WHERE pLR.approved=1 AND a.active=1 AND pLS.owner=?'

sql=mysql.format(sql, [req.params.user])

pool.query(sql, (err, row) => {
  if(err) handleSQLError(res, err)
  return res.json(row)
})

}

//POST
const updatePalListName = (req, res) => {
  console.log('update the list name  now')

  const {name} = req.body
  const {user} = req.params

  //write a query to update the users palListName
  sql='UPDATE palListsSettings SET palListName=? WHERE owner=?'

  sql=mysql.format(sql, [name, user])

  pool.query(sql, (err, results) => {
    if(err) return handleSQLError(res, err)
    return res.json({newId: results.insertId});
  })

}

const updatePalRole = (req, res) => {
  console.log('you have update what the pal can do on your list')

}


module.exports = {
  myPalList,
  updatePalListName,
  updatePalRole
}