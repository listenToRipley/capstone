//handle all your possible error codes 
const handleSQLError = (res, err) => {
  console.log('You have an SQL error', err)
  // removed status(err) from after status since it is causing issues 
  console.log('error ?', {err})
  return res.send('There was an unexpected error in your request')
} 

module.exports = { handleSQLError }