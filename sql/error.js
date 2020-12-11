
const handleSQLError = (res, err) => {
  console.log('You have an SQL error', err)

  console.log('error ?', {err})
  return res.send('There was an unexpected error in your request')
} 

module.exports = { handleSQLError }