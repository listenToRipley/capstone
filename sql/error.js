
const handleSQLError = (res, err) => {

  return res.send('There was an unexpected error in your request', {err})
} 

module.exports = { handleSQLError }