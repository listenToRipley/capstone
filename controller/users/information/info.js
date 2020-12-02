const mysql = require('mysql')
const pool = require('../../../sql/connection')
const { handleSQLError } = require('../../../sql/error')

//GET
const userPersonalInfo = (req, res) => {

  let sql = 'SELECT aI.username aI.password,aI.email, uD.firstName, uD.lastName, uD.dobMonth, uD.dobDate, uD.dobYear, uD.signedUp, uL.userLocationId ,uDP.displayPrefId, pS.pantrySettingId, sLS.shopListSetId, pLS.palListSettingsId, a.accessId FROM appInfo AS aI JOIN usersDetails AS uD ON aI.username=uD.username JOIN access AS a ON aI.username=a.username JOIN usersLocations AS uL ON aI.username=uL.username JOIN usersDisplayPreferences AS uDP ON aI.username=uDP.username JOIN pantriesSettings AS pS ON a.pantry=pS.pantrySettingId JOIN shopListsSettings AS sLS ON a.shopList=sLS.shopListSetId JOIN palListsSettings AS pLS ON aI.username=pLS.owner WHERE aI.username= ? AND a.active=1 AND a.pantryRole=2 OR a.pantryRole=3 AND a.shopListRole=2 OR a.shopListRole=3 LIMIT 1'
 
  sql=mysql.format(sql, [req.user])

  pool.query(sql, (err, row) => {
    if(err) return handleSQLError(res, err)
    return res.json(row); 
  })
}

const userLocation = (req, res) => {

  let sql = 'SELECT * FROM usersLocations WHERE username=?'

  sql=mysql.format(sql,[req.user])

  pool.query(sql, (err, row) => {
    if(err) return handleSQLError(res, err)
    return res.json(row); 
  })  

}

const userBirthday = (req, res) => {

  let sql = 'SELECT username, dobYear, dobMonth, dobDate FROM usersDetails WHERE username=?'

  sql=mysql.format(sql,[req.user])

  pool.query(sql, (err, row) => {
    if(err) return handleSQLError(res, err)
    return res.json(row); 
  })  

}


//PUT
const updateBirthday = (req, res) => {

  const {year, date, month} = req.body

  let sql='UPDATE usersDetails SET dobYear=COALESCE(?, dobYear), dobDate=COALESCE(?, dobDate), dobMonth=COALESCE(?, dobMonth) WHERE username=?'

  sql=mysql.format(sql,[year, date, month, req.user])

  pool.query(sql, (err, results) => {
    if (err) return handleSQLError(res, err)
    return res.status(204).json();
  })

}
const updateEmail = (req, res) => {
  //should have validation the email doesn't currently exist in the system to prevent conflicts

  const {email} = req.body

  let sql='UPDATE appInfo SET email=? WHERE username=?'

  sql=mysql.format(sql,[email, req.user])

  pool.query(sql, (err, results) => {
    if (err) return handleSQLError(res, err)
    return res.status(204).json();
  })

}

const updateLocation = (req, res) => {

  const {address, city, state, zip, country} = req.body

  let sql='UPDATE usersLocations SET address=COALESCE(?, address), city=COALESCE(?, city), state=COALESCE(?, state), zipcode=COALESCE(?, zipcode), country=COALESCE(?,country) WHERE username=?'

  sql=mysql.format(sql,[address, city, state, zip, country, req.user])

  pool.query(sql, (err, results) => {
    if (err) return handleSQLError(res, err)
    return res.status(204).json();
  })

}

const updatePhoneNum = (req, res) => {

  const {phone} = req.body

  let sql='UPDATE usersDetails SET phone=? WHERE username=?'

  sql=mysql.format(sql,[phone , req.user])

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