const mysql = require('mysql')
const { shallowEqual } = require('react-redux')
const pool = require('../sql/connection')
const { handleSQLError } = require('../sql/error')

//GET 
const testing = (req, res) => {
  res.send('You found the admin view')
}

const allMerges = (req, res) => {
  console.log('my whole merge table')
//write a query that returns all your merges 
  pool.query('SELECT * FROM mergeRequests', (err, rows) => {
    if(err) return handleSQLError(res, err)
    return res.json(rows); 
  })
}

const allPalLists = (req, res) => {
  console.log('all pal lists')
  pool.query('SELECT * FROM palListSettings', (err, rows) => {
    if(err) return handleSQLError(res, err)
    return res.json(rows); 
  })
}

const allPantries = (req, res) => {
  console.log('all pantries')

  pool.query('SELECT * FROM pantriesSettings', (err, row) => {
    if(err) return handleSQLError(res, err)
    return res.json(rows); 
  })
}

const allShoppingLists = (req, res) => {
  console.log('all the shopping lists')

  pool.query('SELECT * FROM shopListSettings', (err, rows) => {
    if(err) return handleSQLError(res, err)
    return res.json(rows); 
  })
}

const allDiets = (req, res) => {
  console.log('all the diets, to be use to drop down lists')

  pool.query('SELECT * FROM diets', (err, rows) => {
    if (err) return handleSQLError(res, err)
    return res.json(rows);
  })
}

const validateLogIn = (req, res, next) => { 
  console.log('validate email and password pair match')
  //write a query the returns a requested user so we can validate the username and password provided are listed in the SQL and they match

  let sql = 'SELECT username FROM appInfo WHERE active=1 AND username=? AND password=?'

  sql= mysql.format([req.params.user], [req.params.password])
  
  pool.query(sql, (err, row) => {
    if(err) return handleSQLError(res, err)
      if (res.json(row) === null) {
        res.send('Sorry, we cannot find that login')
      } else {
        res.json(row)
      }
  })   
}

//counts: 
const countSummary = (req, res) => {
  console.log('right now tells you how many users you have')

  pool.query('SELECT COUNT(*) FROM appInfo WHERE active=1', (err, row) => {
    if(err) return handleSQLError(res, err)
    return res.json(row)
  })
}

//PUT
const updateActiveStat = (req, res) => {
  console.log('you have not deactivated a user')
  //call on table user, column active
  const { boo, user } = req.body //if deactivating, should be 0, if active 1 

  let sql = 'UPDATE appInfo SET active=? WHERE username=?'

  sql=mysql.format(sql,[boo, user])

  pool.query(sql, (err, results) => {
    if (err) return handleSQLError(res, err)
    return res.status(204).json();
  })
}


//DELETE


module.exports = { 
  testing,
  allPantries,
  allShoppingLists,
  allMerges,
  allPalLists,
  allDiets,
  validateLogIn,
  countSummary,
  updateActiveStat
}