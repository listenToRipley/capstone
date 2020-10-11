
const mysql = require('mysql')

class Connection {
  constructor() {
    if(!this.pool) {
      console.log('create connection...')
      //add content for connecting your SQL database 
      this.pool = mysql.createPool({
        connectionLimit:100,
        host: process.env.MYSQL_HOST,
        user: process.env.MYSQL_USER,
        password: process.env.MYSQL_PASSWORD,
        database: process.env.MYSQL_DATABASE,
        debug: false
      })

      return this.pool
    }
    console.log('got through the pool')
    return this.pool
  }
}

const instance = new Connection()

module.exports = instance