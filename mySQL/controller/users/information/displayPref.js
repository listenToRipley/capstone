const mysql = require('mysql')
const pool = require('../../../sql/connection')
const { handleSQLError } = require('../../../sql/error')

//GET 
const justDisplayPrefer = (req, res) => {
  console.log('this are just the display preferences for this user')

  let sql = 'SELECT * FROM usersDisplayPreferences WHERE username=?'

  sql=mysql.format(sql,[req.params.user])

  pool.query(sql, (err, row) => {
    if(err) return handleSQLError(res, err)
    return res.json(row); 
  })  

}

//PUT 

//are we going to be able to do this as a bulk thing or are we going to need to address this of every individual item? 
const updateDisplayPrefAll = (req, res) => {
  console.log('update all of your displays to on or off')

  const {boo} = req.body

  let sql='UPDATE usersDisplayPreferences SET likes=?, dislikes=likes, diets=likes, allergies=likes, city=likes, state=likes, country=likes, email=likes, dobMonth=likes, dobDate=likes, dobYear=likes, phone=likes  WHERE username=?'

  sql=mysql.format(sql,[boo, req.params.user])

  pool.query(sql, (err, results) => {
    if (err) return handleSQLError(res, err)
    return res.status(204).json();
  })
}

const updateDisplayPrefEach = (req, res) => {
  console.log('update each of your display preferences, one at a time')

  //if dobMonth is turned off, then you should not be able to display the dobDate
  const {likes, dislikes, diets, allergies, city, state, country, email, dobMonth, dobDate, dobYear, phone} = req.body
  const {user} = req.params

  //make sure if not changes occur, then the body reads as null
  let sql='UPDATE usersDisplayPreferences SET likes=COALESCE(?, likes), dislikes=COALESCE(?, dislikes), diets=COALESCE(?,diets), allergies=COALESCE(?, allergies), city=COALESCE(?, city), state=COALESCE(?, state), country=COALESCE(?, country), email=COALESCE(?, email), dobMonth=COALESCE(?, dobMonth), dobDate=COALESCE(?, dobDate), dobYear=COALESCE(?, dobYear), phone=COALESCE(?, phone)  WHERE username=?'

  sql=mysql.format(sql, [likes, dislikes, diets, allergies, city, state, country, email, dobMonth, dobDate, dobYear, phone, user])

  pool.query(sql, (err, results) => {
    if (err) return handleSQLError(res, err)
    return res.status(204).json();
  })

}

const updateDisplayPrefDefault = (req, res) => {
  console.log('reset you display preferences to the default ')

  let sql='UPDATE usersDisplayPreferences SET likes=0, dislikes=0, diets=0, allergies=0, city=0, state=0, country=0, email=1, dobMonth=1, dobDate=1, dobYear=0, phone=0, private=0  WHERE username=?'

  sql=mysql.format(sql, [req.params.user])

  pool.query(sql, (err, results) => {
    if (err) return handleSQLError(res, err)
    return res.status(204).json();
  })
}

const updateDisplayPrivate = (req, res) => {
  console.log('update just the private settings')

  const {boo} = req.body
  const {user} = req.params

  let sql = 'UPDATE usersDisplayPreferences SET private=? WHERE username=?'

  sql=mysql.format(sql, [boo, user])

  pool.query(sql, (err, results) => {
    if(err) return handleSQLError(res, err)
    return res.status(204).json
  })
}

module.exports = {
  justDisplayPrefer, 
  updateDisplayPrefAll,
  updateDisplayPrefEach,
  updateDisplayPrefDefault,
  updateDisplayPrivate
}