const mysql = require('mysql')
const pool = require('../../../sql/connection')
const { handleSQLError } = require('../../../sql/error')

//GET
const userPersonalInfo = (req, res) => {
  console.log('get all the users information')
  //may need to rewrite to consider merge status for pantry and shop list name, should be include this in the primary information? 

  let sql = 'SELECT DISTINCT aI.username, uD.firstName, uD.lastName, aI.email, uD.phone FROM appInfo AS aI JOIN usersDetails AS uD  ON  aI.username=uD.username WHERE aI.username = ?'
 
  sql=mysql.format(sql, [req.params.user])

  pool.query(sql, (err, row) => {
    if(err) return handleSQLError(res, err)
    return res.json(row); 
  })
}

const userLocation = (req, res) => {
  console.log('this is just the user location')

  let sql = 'SELECT * FROM usersLocations WHERE username=?'

  sql=mysql.format(sql,[req.params.user])

  pool.query(sql, (err, row) => {
    if(err) return handleSQLError(res, err)
    return res.json(row); 
  })  

}

const userBirthday = (req, res) => {
  console.log('you got back just the users birthday')

  let sql = 'SELECT username, dobYear, dobMonth, dobDate FROM usersDetails WHERE username=?'

  sql=mysql.format(sql,[req.params.user])

  pool.query(sql, (err, row) => {
    if(err) return handleSQLError(res, err)
    return res.json(row); 
  })  

}


//PUT
const updateBirthday = (req, res) => {
  console.log('you have now updated your birthday')

  const {month, date, year} = req.body

  //if nothing is passed in or changed, make sure the body reads 'null' for those lines 
  let sql='UPDATE usersDetails SET dobYear=COALESCE(?, dobYear), dobDate=COALESCE(?, dobDate), dobMonth=COALESCE(?, dobMonth) WHERE username=?'

  sql=mysql.format(sql,[month, date, year, req.params.user])

  pool.query(sql, (err, res) => {
    if (err) return handleSQLError(res, err)
    return res.status(204).json();
  })

}

const updateEmail = (req, res) => {
  console.log('you have how update the user information')

  const {email} = req.body
  const {user} = req.params

  let sql='UPDATE appInfo SET email=? WHERE username=?'

  sql=mysql.format(sql,[email, user])

  pool.query(sql, (err, results) => {
    if (err) return handleSQLError(res, err)
    return res.status(204).json();
  })

}

const updateLocation = (req, res) => {
  console.log('you have now update your location')

  const {address, city, state, zip, country} = req.body
  const {user} = req.params

  let sql='UPDATE usersLocations SET address=COALESCE(?, address), city=COALESCE(?, city), state=COALESCE(?, state), zipcode=COALESCE(?, zipcode), country=COALESCE(?,country) WHERE username=?'

  sql=mysql.format(sql,[address, city, state, zip, country, user])

  pool.query(sql, (err, row) => {
    if (err) return handleSQLError(res, err)
    return res.status(204).json();
  })

}

const updatePhoneNum = (req, res) => {
  console.log('you have not update the phone number')

  const {phone} = req.body
  const {user} = req.params

  let sql='UPDATE usersDetails SET phone=? WHERE username=?'

  sql=mysql.format(sql,[phone , user])

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