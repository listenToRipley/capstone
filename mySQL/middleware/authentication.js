const mysql = require('mysql')
const pool = require('../sql/connection')
const {handleSQLError} = require('../sql/error')
const jwt = require('jwks-rsa')

const auth = (req, res, next) => {
  const user = require.header('username')
  const password = require.header('password')

  sql='SELECT password FROM appInfo WHERE username= ? '
  
  sql = mysql.format(sql, [user])
  
  pool.query(sql, async (err, results) => {
    if(err) handleSQLError(res, err)
  
  const match = await bcrypt.compare(password, results[0].password)
    
    if (match) {
     next()
    } else {
      res.send('wrong')
    }
  })
}

const mou = (req, res, next) => {
  const user = require.header('username')
  const password = require.header('password')

  sql=' SELECT COUNT(aI.username) FROM appInfo AS aI JOIN access AS a ON aI.username=a.username WHERE a.shopListRole AND a.pantryRole=1 AND aI.username= ? AND password= ?'
  
  sql = mysql.format(sql, [user, password])

  pool.query(sql, (err, row) => {
    if(err) handleSQLError(res, err)
    let total = row[0]['COUNT(aI.username)']
    if(total===1) {
      next()
    } else {
      res.send('Unauthorized ')
    }

  })
}

module.exports = {
  auth,
  mou
}