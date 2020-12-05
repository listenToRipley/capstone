const mysql = require('mysql')
const pool = require('../../../sql/connection')
const { handleSQLError } = require('../../../sql/error')

//GET
const userPersonalInfo = (req, res) => {
  console.log('params coming through okay on the request? ',req.params.user)
  let sql = 'SELECT a.username, a.accessId, a.shopList, a.pantry, pLS.palListSettingsId FROM access AS a JOIN shopListsSettings AS sLS ON a.shopList=sLS.shopListSetId JOIN pantriesSettings AS pS ON a.pantry=pS.pantrySettingId JOIN palListsSettings AS pLS ON a.username=pLS.owner WHERE pantryRole=2 AND username= ?'
  
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


//PUT
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
  //should have validation the email doesn't currently exist in the system to prevent conflicts

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