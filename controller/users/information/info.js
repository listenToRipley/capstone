const mysql = require('mysql')
const pool = require('../../../sql/connection')
const { handleSQLError } = require('../../../sql/error')


const userPersonalInfo = (req, res) => {

  let sql = 'SELECT aI.username, uL.userLocationId ,uDP.displayPrefId, pS.pantrySettingId, sLS.shopListSetId, pLS.palListSettingsId, a.accessId FROM appInfo AS aI JOIN usersDetails AS uD ON aI.username=uD.username JOIN access AS a ON aI.username=a.username AND aI.username= ? JOIN usersLocations AS uL ON aI.username=uL.username JOIN usersDisplayPreferences AS uDP ON aI.username=uDP.username JOIN pantriesSettings AS pS ON a.pantry=pS.pantrySettingId JOIN shopListsSettings AS sLS ON a.shopList=sLS.shopListSetId JOIN palListsSettings AS pLS ON aI.username=pLS.owner WHERE a.active=1 AND pantryRole=2 OR pantryRole=1 OR pantryRole=3'

  sql=mysql.format(sql, [req.params.user])

  pool.query(sql, (err, row) => {
    if(err) return handleSQLError(res, err)
    return res.json(row); 
  })
}

const userLocation = (req, res) => {

  let sql = 'SELECT * FROM usersLocations WHERE username=?'

  sql=mysql.format(sql,[req.params.user])

  pool.query(sql, (err, row) => {
    if(err) return handleSQLError(res, err)
    return res.json(row); 
  })  

}

const userBirthday = (req, res) => {

  let sql = 'SELECT username, dobYear, dobMonth, dobDate FROM usersDetails WHERE username=?'

  sql=mysql.format(sql,[req.params.user])

  pool.query(sql, (err, row) => {
    if(err) return handleSQLError(res, err)
    return res.json(row); 
  })  

}


const updateBirthday = (req, res) => {

  const {year, date, month} = req.body

  let sql='UPDATE usersDetails SET dobYear=COALESCE(?, dobYear), dobDate=COALESCE(?, dobDate), dobMonth=COALESCE(?, dobMonth) WHERE username=?'

  sql=mysql.format(sql,[year, date, month, req.params.user])

  pool.query(sql, (err, results) => {
    if (err) return handleSQLError(res, err)
    return res.status(204).json();
  })

}
const updateEmail = (req, res) => {

  const {email} = req.body

  let sql='UPDATE appInfo SET email=? WHERE username=?'

  sql=mysql.format(sql,[email, req.params.user])

  pool.query(sql, (err, results) => {
    if (err) return handleSQLError(res, err)
    return res.status(204).json();
  })

}

const updateLocation = (req, res) => {

  const {address, city, state, zip, country} = req.body

  let sql='UPDATE usersLocations SET address=COALESCE(?, address), city=COALESCE(?, city), state=COALESCE(?, state), zipcode=COALESCE(?, zipcode), country=COALESCE(?,country) WHERE username=?'

  sql=mysql.format(sql,[address, city, state, zip, country, req.params.user])

  pool.query(sql, (err, results) => {
    if (err) return handleSQLError(res, err)
    return res.status(204).json();
  })

}

const updatePhoneNum = (req, res) => {

  const {phone} = req.body

  let sql='UPDATE usersDetails SET phone=? WHERE username=?'

  sql=mysql.format(sql,[phone , req.params.user])

  pool.query(sql, (err, results) => {
    if (err) return handleSQLError(res, err)
    return res.status(204).json();
  })

}


module.exports = {
  userPersonalInfo,
  userLocation,
  userBirthday,
  updateBirthday, 
  updateEmail,
  updateLocation,
  updatePhoneNum
}