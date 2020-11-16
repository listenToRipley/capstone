const mysql = require('mysql')
const pool = require('../../../sql/connection')
const {handleSQLError} = require('../../../sql/error')
//this will pull on the pals lists 
//all will pull from pals lists 

//GET
const myPalList = (req, res) => {
  console.log('get the pal list of the current user ')
//NEED TO UPDATE TO INCLUDE THE PAL LIST - we need to change this so the roles display and not the index
const {user} = req.params

let sql = 'SELECT DISTINCT a.accessId, pL.username AS pals, pL.reqId AS palReq, pL.palList, pLS.palListName, a.pantryRole, a.shopListRole FROM palLists AS pL JOIN palListsRequests AS pLR JOIN palListsSettings AS pLS JOIN access AS a ON pLR.palRequestId=pL.reqId AND a.palReq=pL.reqId AND pL.palList=pLS.palListSettingsId WHERE pLR.approved=1 AND a.active=1 AND a.username<>? AND pLS.owner=? ORDER BY a.accessId'

sql=mysql.format(sql, [user, user])
pool.query(sql, (err, row) => {
  if(err) return handleSQLError(res, err)
  console.log('sql ? ',sql, ' row ? ',row)
  return res.json(row); 
})  

}

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
  myPalList,
  updatePalListName,
  updatePalRole
}