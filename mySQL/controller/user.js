const mysql = require('mysql')
const pool = require('../sql/connection')
const { handleSQLError } = require('../sql/error')
//this will pull the user's information
//will also help with finding users

//GET 

const justUserInfo = (req, res) => {
  console.log('get all the users information')
  //may need to rewrite to consider merge status for pantry and shop list name, should be include this in the primary information? 
  let sql = 'SELECT aI.username, uD.firstName, uD.lastName, aI.email, uD.dobMonth, uD.dobDate, uD.dobYear, uD.signedUp, pLS.palListSettingsId AS palListId, pLS.palListName, pS.pantrySettingId AS pantryId, pS.pantryName, sLS.shopListSetId AS shopListId, sLS.shopListName FROM appInfo aI JOIN palListSettings AS pLS JOIN usersDetails uD JOIN pantriesSettings AS pS JOIN shopListsSettings as sLS WHERE aI.username = uD.username AND aI.username = pS.owner AND aI.username = sLS.owner AND  aI.username = pLS.owner AND aI.username = ?;'
  console.log('can you still see the username?', [req.params.username])
  sql=mysql.format(sql, [req.params.username])

  pool.query(sql, (err, row) => {
    if(err) return handleSQLError(res, err)
    return res.json(row); 
  })
}

const justDisplayPreferences = (req, res) => {
  console.log('this are just the display preferences for this user')

  let sql = 'SELECT * FROM usersDisplayPreferences WHERE user=?'

  sql=mysql.format(sql,[req.params.username])

  pool.query(sql, (err, row) => {
    if(err) return handleSQLError(res, err)
    return res.json(row); 
  })  

}

const justLocation = (req, res) => {
  console.log('this is just the user location')

  let sql = 'SELECT * FROM usersLocations WHERE user=?'

  sql=mysql.format(sql,[req.params.user])

  pool.query(sql, (err, row) => {
    if(err) return handleSQLError(res, err)
    return res.json(row); 
  })  

}

const justBirthday = (req, res) => {
  console.log('you got back just the users birthday')

  let sql = 'SELECT username, dobYear, dobMonth, dobDate FROM usersDetails WHERE username=?'

  sql=mysql.format(sql,[req.params.username])

  pool.query(sql, (err, row) => {
    if(err) return handleSQLError(res, err)
    return res.json(row); 
  })  

}

const justLikes = (req, res) => {
  console.log('this is just your likes')

  let sql='SELECT l.like, l.spoonId FROM likes AS l WHERE l.user=?'

  sql=mysql.format(sql,[req.params.username])

  pool.query(sql, (err, row) => {
    if(err) return handleSQLError(res, err)
    return res.json(row); 
  })  

} 

const justDislikes = (req, res) => {
  console.log('this is just your dislikes')

  let sql='SELECT item, spoonId FROM dislikes WHERE username=?'

  sql=mysql.format(sql,[req.params.username])

  pool.query(sql, (err, row) => {
    if(err) return handleSQLError(res, err)
    return res.json(row); 
  })  

} 

const justDiets = (req, res) => {
  console.log('this is just your diets')

  let sql=''

  sql=mysql.format(sql,[req.params.username])

  pool.query(sql, (err, row) => {
    if(err) return handleSQLError(res, err)
    return res.json(row); 
  })  

} 

const justAllergies = (req, res) => {
  console.log('this is just your allergies')

  let sql='SELECT al.entry, al.spoonId FROM allergies AS al JOIN userAllergies AS uAl ON uAl.allergy=al.allergyId AND uAl.user=?'

  sql=mysql.format(sql,[req.params.username])

  pool.query(sql, (err, row) => {
    if(err) return handleSQLError(res, err)
    return res.json(row); 
  })  

}

//POST
const createUser = (req, res) => {
  //write a query the creates a new user 
  console.log('create a new user')

  let sql=	'INSERT INTO `appInfo` (username, password, email ) VALUES (? ,?, ?); INSERT INTO `usersDetails` (username, firstName, lastName, dobMonth, dobDate, dobYear, signedUp) VALUES (?, ?, ?, ?, ?, ?, NOW()); INSERT INTO `usersDisplayPreferences` (username) VALUES (?); INSERT INTO `pantriesSettings` (owner) VALUES (?); INSERT INTO `shopListsSettings` (owner) VALUES (?); INSERT INTO `palListsSettings` (owner) VALUES (?); INSERT INTO `usersLocations` (username) VALUES (?); INSERT INTO `access` (username, pantry, pantryRole, shopList, shopListRole) VALUES (?,(SELECT pantrySettingId FROM pantriesSettings WHERE owner=?), 2, (SELECT shopListSetId FROM shopListsSettings WHERE owner=?), 2);'

  //there are a lot of entries that inputs that are repeated, is there a way to only use it once instead of having to have the same input over and over again? 
  sql=mysql.format(sql,[req.body.username], [req.body.password], [req.body.password], [req.body.username], [req.body.firstName], [req.body.lastName], [req.body.dobYear], [req.body.dobDate], [req.body.dobMonth], [req.body.owner], [req.body.owner], [req.body.owner],[req.body.username], [req.body.owner], [req.body.owner] )

  pool.query(sql, (err, results) => {
    if(err) return handleSQLError(res, err)
    return res.json({ newId: results.insertId}); //need to verify this
  })  
  
}

const addLike = (req, res) => {
  console.log('you have now added a like')

  let sql='INSERT INTO likes (username, item, spoonId) VALUES (?, ?, ?)'

  sql=mysql.format(sql,[req.body.username], [req.body.item], [req.body.spoonId])

  pool.query(sql, (err, results) => {
    if(err) return handleSQLError(res, err)
    return res.json( { newId: results.insertId} ); //double check this
  })  

}

const addDislike = (req, res) => {
  console.log('you have now added a like')

  let sql='INSERT INTO dislikes (username, item, spoonId) VALUES (?, ?, ?)'

  sql=mysql.format(sql,[req.body.username], [req.body.item], [req.body.spoonId])

  pool.query(sql, (err, results) => {
    if(err) return handleSQLError(res, err)
    return res.json( { newId: results.insertId} ); //double check this
  })  

}

const addDiet = (req, res) => {
  console.log('you have now added a like')

  let sql='INSERT INTO usersDiets (username, diet) VALUES (?, ?)'

  sql=mysql.format(sql,[req.body.username], [req.body.dietId])

  pool.query(sql, (err, row) => {
    if(err) return handleSQLError(res, err)
    return res.json(row); 
  })  

}

const addAllergy = (req, res) => {
  console.log('you have now added a like')

  let sql=''

  sql=mysql.format(sql,[req.body])

  pool.query(sql, (err, results) => {
    if(err) return handleSQLError(res, err)
    return res.json( { newId: results.insertId} ); //double check this
  })  

}


//PUT 
const updatePassword = (req, res) => {
  console.log('you have now update the password for this user')

  let sql=''

  sql=mysql.format(sql,[req.body])

  pool.query(sql, (err, results) => {
    if (err) return handleSQLError(res, err)
    return res.status(204).json();
  })

}

const updateEmail = (req, res) => {
  console.log('you have how update the user information')

  let sql=''

  sql=mysql.format(sql,[req.body])

  pool.query(sql, (err, results) => {
    if (err) return handleSQLError(res, err)
    return res.status(204).json();
  })


}

//are we going to be able to do this as a bulk thing or are we going to need to address this of every individual item? 
const updateDisplayPreferences = (req, res) => {
  console.log('you have now updated your display preferences')

  let sql=''

  sql=mysql.format(sql,[req.body])

  pool.query(sql, (err, results) => {
    if (err) return handleSQLError(res, err)
    return res.status(204).json();
  })
}

//might have to break it down to each item?
const updateBirthday = (req, res) => {
  console.log('you have now updated your birthday')

  let sql=''

  sql=mysql.format(sql,[req.body])

  pool.query(sql, (err, results) => {
    if (err) return handleSQLError(res, err)
    return res.status(204).json();
  })

}

const updateLocation = (req, res) => {
  console.log('you have now update your location')

  let sql=''

  sql=mysql.format(sql,[req.body])

  pool.query(sql, (err, results) => {
    if (err) return handleSQLError(res, err)
    return res.status(204).json();
  })

}

const updatePhoneNum = (req, res) => {
  console.log('you have not update the phone number')

  let sql=''

  sql=mysql.format(sql,[req.params])

  pool.query(sql, (err, results) => {
    if (err) return handleSQLError(res, err)
    return res.status(204).json();
  })

}

const removeLike = (req, res) => {
  console.log('you have now removed a like from this user')

  let sql=''

  sql=mysql.format(sql,[req.body])

  pool.query(sql, (err, results) => {
    if (err) return handleSQLError(res, err)
    return res.status(204).json();
  })
}

const removeDislike = (req, res) => {
  console.log('you have now removed a like from this user')

  let sql=''

  sql=mysql.format(sql,[req.body])

  pool.query(sql, (err, results) => {
    if (err) return handleSQLError(res, err)
    return res.status(204).json();
  })
}

const removeDiet = (req, res) => {
  console.log('you have now removed a like from this user')

  let sql=''

  sql=mysql.format(sql,[req.body])

  pool.query(sql, (err, results) => {
    if (err) return handleSQLError(res, err)
    return res.status(204).json();
  })
}

const removeAllergy = (req, res) => {
  console.log('you have now removed a like from this user')

  let sql=''

  sql=mysql.format(sql,[req.body])

  pool.query(sql, (err, results) => {
    if (err) return handleSQLError(res, err)
    return res.status(204).json();
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