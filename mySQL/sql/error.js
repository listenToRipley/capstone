//handle all your possible error codes 
const handleSQLErrors = (res, err) => {
  console.log('You have an SQL error', err)
  return res.status(error).send('There was an unexpected error in your request')
} 