const mysql = require('mysql')
const pool = require('../../../sql/connection')
const {handleSQLError} = require('../../../sql/error')

const palList = (req, res) => {

const {user} = req.params

let sql = 'SELECT DISTINCT a.accessId, pL.username AS pals, pL.reqId AS palReq, pL.palList, pLS.palListName, a.pantryRole, a.shopListRole FROM palLists AS pL JOIN palListsRequests AS pLR JOIN palListsSettings AS pLS JOIN access AS a ON pLR.palRequestId=pL.reqId AND a.palReq=pL.reqId AND pL.palList=pLS.palListSettingsId WHERE pLR.approved=1 AND a.active=1 AND a.username<>? AND pLS.owner=? ORDER BY a.accessId'

sql=mysql.format(sql, [user, user])
pool.query(sql, (err, row) => {
  if(err) return handleSQLError(res, err)
  return res.json(row); 
})  

}

module.exports = {
  palList
}