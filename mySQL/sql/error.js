//handle all your possible error codes 
const handleSQLError = (res, err) => {
  // console.log('You have an SQL error', err)
  return res.status(err).send('There was an unexpected error in your request')
} 

module.exports = { handleSQLError }