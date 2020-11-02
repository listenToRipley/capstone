const mysql = require('mysql')
const pool = require('../../sql/connection')
const { handleSQLError } = require('../../sql/error')

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

  pool.query('SELECT * FROM pantriesSettings', (err, rows) => {
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


//counts: 
const countSummary = (req, res) => {
  console.log('right now tells you how many users you have')

  pool.query('SELECT COUNT(*) FROM appInfo WHERE active=1', (err, row) => {
    if(err) return handleSQLError(res, err)
    return res.json(row)
  })
}

modules.exports = {
  allMerges,
  allPalLists,
  allPantries,
  allShoppingLists,
  allDiets,
  countSummary
}