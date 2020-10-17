const mysql = require('mysql')
const pool = require('../sql/connection')
const { handleSQLError } = require('../sql/error')
//this will pull the user's information
//will also help with finding users

//GET 

const justUserInfo = (req, res) => {
  console.log('get all the users information')
  //write a query the returns all information related to a specific user - used to create user profile 
  //from the following tables 
  //user
  //userLocation 
  //app info 
  //likes, dislikes, diet and allergies 
  //write a query that updates content for a user 
}

const justDisplayPreferences = (req, res) => {
  console.log('this are just the display preferences for this user')

  let sql = 'SELECT * FROM kitchenSink.displayPreferences WHERE user=?'

  sql=mysql.format(sql,[req.params.user])

  pool.query(sql, (err, row) => {
    if(err) return handleSQLError(res, err)
    return res.json(row); 
  })  

}

const justLocation = (req, res) => {
  console.log('this is just the user location')

  let sql = 'SELECT * FROM kitchenSink.userLocations WHERE user=?'

  sql=mysql.format(sql,[req.params.user])

  pool.query(sql, (err, row) => {
    if(err) return handleSQLError(res, err)
    return res.json(row); 
  })  

}

const justLikes = (req, res) => {
  console.log('this is just your likes')
} 

const justDislikes = (req, res) => {
  console.log('this is just your dislikes')
} 

const justDiets = (req, res) => {
  console.log('this is just your diets')
} 

const justAllergies = (req, res) => {
  console.log('this is just your allergies')
}

//POST
const createUser = (req, res) => {
  //write a query the creates a new user 
  console.log('create a new user')
  //user
  //appInfo
  //displayPreference
  //userLocation
  //palList
  //shoppingListSettings
  //pantrySettings
}

const addLike = (req, res) => {
  console.log('you have now added a like')
}

const addDislike = (req, res) => {
  console.log('you have now added a like')
}

const addDiet = (req, res) => {
  console.log('you have now added a like')
}

const addAllergy = (req, res) => {
  console.log('you have now added a like')
}


//PUT 
const updatePassword = (req, res) => {
  console.log('you have now update the password for this user')
}

const updateEmail = (req, res) => {
  console.log('you have how update the user information')
}

const updateDisplayPreferences = (req, res) => {
  console.log('you have now updated your display preferences')
}

const updateBirthday = (req, res) => {
  console.log('you have now updated your birthday')
}

const updateLocation = (req, res) => {
  console.log('you have now update your location')
}

//DELETE
const removeLike = (req, res) => {
  console.log('you have now removed a like from this user')
}

const removeDislike = (req, res) => {
  console.log('you have now removed a like from this user')
}

const removeDiet = (req, res) => {
  console.log('you have now removed a like from this user')
}

const removeAllergy = (req, res) => {
  console.log('you have now removed a like from this user')
}


module.exports = { 
  infoOfUser,
  justUserInfo,
  justDisplayPreferences,
  justLocation,
  justLikes,
  justDislikes,
  justDiets,
  justAllergies,
  createUser,
  addLike, 
  addDislike, 
  addDiet,
  addAllergy,
  updatePassword,
  updateEmail, 
  updateDisplayPreferences, 
  updateBirthday,
  updateLocation,  
  removeLike,
  removeDislike,
  removeDiet,
  removeAllergy
}