const { faEnvelope } = require('@fortawesome/free-regular-svg-icons')
//add content for connecting your SQL database 
const mysql = require('mysql')

class Connection {
  constructor() {
    if(!this.pool) {
      console.log('create connection...')
      this.pool.mysql.createPool({
        connectionLimit:10,
        host: process.env.MYSQL_HOSTNAME,
        user: process.env.MYSQL_USERNAME,
        password: process.env.MYSQL_PASSWORD,
        database: PantryPal
      })
      return this.pool
    }
    return this.pool
  }
}

const instance = new Connection()

module.exports = instance