const mysql = require('mysql')
const pool = require('../sql/connection')
const { handleSQLError } = require('../sql/error')
//this will pull the user's information
//will also help with finding users

//GET 

const justUserInfo = (req, res) => {
  console.log('get all the users information')
  //write a query the returns all information related to a specific
  let sql = 'SELECT u.userId, aI.username, u.firstName, u.lastName, aI.email, u.dobYear, u.dobMonth, u.dobDate, uL.address, uL.city, uL.state, uL.zipcode, uL.country ,aI.phone, u.active, u.signUpDate FROM users AS u JOIN appInfo AS aI JOIN userLocations AS uL ON u.userId=aI.userId AND aI.username=? AND uL.user=?' 
// since the input on both ? is the same, can we use on param? 
  sql=mysql.format(sql, [req.params.username], [req.params.user])

  pool.query(sql, (err, row) => {
    if(err) return handleSQLError(res, err)
    return res.json(row); 
  })
}

const justDisplayPreferences = (req, res) => {
  console.log('this are just the display preferences for this user')

  let sql = 'SELECT * FROM displayPreferences WHERE user=?'

  sql=mysql.format(sql,[req.params.user])

  pool.query(sql, (err, row) => {
    if(err) return handleSQLError(res, err)
    return res.json(row); 
  })  

}

const justLocation = (req, res) => {
  console.log('this is just the user location')

  let sql = 'SELECT * FROM userLocations WHERE user=?'

  sql=mysql.format(sql,[req.params.user])

  pool.query(sql, (err, row) => {
    if(err) return handleSQLError(res, err)
    return res.json(row); 
  })  

}

const justBirthday = (req, res) => {
  console.log('you got back just the users birthday')

  let sql = 'SELECT aI.username, u.dobYear, u.dobMonth, u.dobDate FROM users AS u JOIN appInfo AS aI ON u.userId=aI.userId AND aI.username=?'

  sql=mysql.format(sql,[req.params.username])

  pool.query(sql, (err, row) => {
    if(err) return handleSQLError(res, err)
    return res.json(row); 
  })  

}

const justLikes = (req, res) => {
  console.log('this is just your likes')

  let sql='SELECT l.like, l.spoonId FROM likes AS l WHERE l.user=?'

  sql=mysql.format(sql,[req.params.user])

  pool.query(sql, (err, row) => {
    if(err) return handleSQLError(res, err)
    return res.json(row); 
  })  

} 

const justDislikes = (req, res) => {
  console.log('this is just your dislikes')

  let sql='SELECT d.dislike, d.spoonId FROM dislikes AS d WHERE d.user=?'

  sql=mysql.format(sql,[req.params.user])

  pool.query(sql, (err, row) => {
    if(err) return handleSQLError(res, err)
    return res.json(row); 
  })  

} 

const justDiets = (req, res) => {
  console.log('this is just your diets')

  let sql='SELECT dt.name FROM diets AS dt JOIN usersDiets AS udt ON udt.diet=dt.dietId AND udt.user=?'

  sql=mysql.format(sql,[req.params.user])

  pool.query(sql, (err, row) => {
    if(err) return handleSQLError(res, err)
    return res.json(row); 
  })  

} 

const justAllergies = (req, res) => {
  console.log('this is just your allergies')

  let sql='SELECT al.entry, al.spoonId FROM allergies AS al JOIN userAllergies AS uAl ON uAl.allergy=al.allergyId AND uAl.user=?'

  sql=mysql.format(sql,[req.params.user])

  pool.query(sql, (err, row) => {
    if(err) return handleSQLError(res, err)
    return res.json(row); 
  })  

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

  let sql=''

  sql=mysql.format(sql,[req.params])

  pool.query(sql, (err, row) => {
    if(err) return handleSQLError(res, err)
    return res.json(row); 
  })  
  
}

const addLike = (req, res) => {
  console.log('you have now added a like')

  let sql=''

  sql=mysql.format(sql,[req.params])

  pool.query(sql, (err, row) => {
    if(err) return handleSQLError(res, err)
    return res.json(row); 
  })  

}

const addDislike = (req, res) => {
  console.log('you have now added a like')

  let sql=''

  sql=mysql.format(sql,[req.params])

  pool.query(sql, (err, row) => {
    if(err) return handleSQLError(res, err)
    return res.json(row); 
  })  

}

const addDiet = (req, res) => {
  console.log('you have now added a like')

  let sql=''

  sql=mysql.format(sql,[req.params])

  pool.query(sql, (err, row) => {
    if(err) return handleSQLError(res, err)
    return res.json(row); 
  })  

}

const addAllergy = (req, res) => {
  console.log('you have now added a like')

  let sql=''

  sql=mysql.format(sql,[req.params])

  pool.query(sql, (err, row) => {
    if(err) return handleSQLError(res, err)
    return res.json(row); 
  })  

}


//PUT 
const updatePassword = (req, res) => {
  console.log('you have now update the password for this user')

  let sql=''

  sql=mysql.format(sql,[req.params])

  pool.query(sql, (err, row) => {
    if(err) return handleSQLError(res, err)
    return res.json(row); 
  })  

}

const updateEmail = (req, res) => {
  console.log('you have how update the user information')

  let sql=''

  sql=mysql.format(sql,[req.params])

  pool.query(sql, (err, row) => {
    if(err) return handleSQLError(res, err)
    return res.json(row); 
  })  

}

const updateDisplayPreferences = (req, res) => {
  console.log('you have now updated your display preferences')

  let sql=''

  sql=mysql.format(sql,[req.params])

  pool.query(sql, (err, row) => {
    if(err) return handleSQLError(res, err)
    return res.json(row); 
  })  
  
}

const updateBirthday = (req, res) => {
  console.log('you have now updated your birthday')

  let sql=''

  sql=mysql.format(sql,[req.params])

  pool.query(sql, (err, row) => {
    if(err) return handleSQLError(res, err)
    return res.json(row); 
  })  

}

const updateLocation = (req, res) => {
  console.log('you have now update your location')

  let sql=''

  sql=mysql.format(sql,[req.params])

  pool.query(sql, (err, row) => {
    if(err) return handleSQLError(res, err)
    return res.json(row); 
  })  

}

const updatePhoneNum = (req, res) => {
  console.log('you have not update the phone number')

  let sql=''

  sql=mysql.format(sql,[req.params])

  pool.query(sql, (err, row) => {
    if(err) return handleSQLError(res, err)
    return res.json(row); 
  })  

}

//DELETE
const removeLike = (req, res) => {
  console.log('you have now removed a like from this user')

  let sql=''

  sql=mysql.format(sql,[req.params])

  pool.query(sql, (err, row) => {
    if(err) return handleSQLError(res, err)
    return res.json(row); 
  })  
}

const removeDislike = (req, res) => {
  console.log('you have now removed a like from this user')

  let sql=''

  sql=mysql.format(sql,[req.params])

  pool.query(sql, (err, row) => {
    if(err) return handleSQLError(res, err)
    return res.json(row); 
  })  
}

const removeDiet = (req, res) => {
  console.log('you have now removed a like from this user')

  let sql=''

  sql=mysql.format(sql,[req.params])

  pool.query(sql, (err, row) => {
    if(err) return handleSQLError(res, err)
    return res.json(row); 
  })  
}

const removeAllergy = (req, res) => {
  console.log('you have now removed a like from this user')

  let sql=''

  sql=mysql.format(sql,[req.params])

  pool.query(sql, (err, row) => {
    if(err) return handleSQLError(res, err)
    return res.json(row); 
  })  

}


module.exports = { 
  justUserInfo,
  justDisplayPreferences,
  justLocation,
  justBirthday,
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
  updatePhoneNum,
  removeLike,
  removeDislike,
  removeDiet,
  removeAllergy
}