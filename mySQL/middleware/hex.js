const mysql = require('mysql')
const pool = require('../sql/connection')
const { handleSQLError } = require('../sql/error')
const bcrypt = require('bcrypt')

const saltRounds = 10; 

const hexPass = async (req, res) => {
  try {
    const salt = await bcrypt.genSalt()
    const passHex = await bcrypt.hash(req.body.password, salt) 
    console.log(salt)
    console.log(hex)
    const pass = { password: passHex }
    res.send(pass)
  } catch {
    res.send('Not so much')
  }
}

module.export = {
  hexPass
}