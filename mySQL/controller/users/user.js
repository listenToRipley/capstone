const mysql = require('mysql')
const pool = require('../../sql/connection')
const { handleSQLError } = require('../../sql/error')
//this will pull the user's information
//will also help with finding users

//GET 

const justUserInfo = (req, res) => {
  console.log('get all the users information')
  //may need to rewrite to consider merge status for pantry and shop list name, should be include this in the primary information? 

  let sql = 'SELECT aI.username, uD.firstName, uD.lastName, aI.email, uD.dobMonth, uD.dobDate, uD.dobYear, uD.signedUp, pLS.palListSettingsId AS palListId, pLS.palListName, pS.pantrySettingId AS pantryId, pS.pantryName, sLS.shopListSetId AS shopListId, sLS.shopListName FROM appInfo aI JOIN palListsSettings AS pLS JOIN usersDetails uD JOIN pantriesSettings AS pS JOIN shopListsSettings as sLS WHERE aI.username = uD.username AND aI.username = pS.owner AND aI.username = sLS.owner AND  aI.username = pLS.owner AND aI.username = ?'
  console.log('can you still see the username?', [req.params.username])
  sql=mysql.format(sql, [req.params.username])

  pool.query(sql, (err, row) => {
    if(err) return handleSQLError(res, err)
    return res.json(row); 
  })
}

const justDisplayPrefer = (req, res) => {
  console.log('this are just the display preferences for this user')

  let sql = 'SELECT * FROM usersDisplayPreferences WHERE username=?'

  sql=mysql.format(sql,[req.params.username])

  pool.query(sql, (err, row) => {
    if(err) return handleSQLError(res, err)
    return res.json(row); 
  })  

}

const justLocation = (req, res) => {
  console.log('this is just the user location')

  let sql = 'SELECT * FROM usersLocations WHERE username=?'

  sql=mysql.format(sql,[req.params.username])

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

  let sql='SELECT likeId AS id, item, spoonId FROM likes WHERE active=1 AND username=?'

  sql=mysql.format(sql,[req.params.username])

  pool.query(sql, (err, row) => {
    if(err) return handleSQLError(res, err)
    return res.json(row); 
  })  

} 

const justDislikes = (req, res) => {
  console.log('this is just your dislikes')

  let sql='SELECT dislikeId AS id, item, spoonId FROM dislikes WHERE active=1 AND username=?'

  sql=mysql.format(sql,[req.params.username])

  pool.query(sql, (err, row) => {
    if(err) return handleSQLError(res, err)
    return res.json(row); 
  })  

} 

const justDiets = (req, res) => {
  console.log('this is just your diets')

  let sql='SELECT uD.uDietId AS id, d.diet FROM usersDiets AS uD JOIN diets AS d ON uD.diet=d.dietId WHERE uD.active=1 AND uD.username=?'

  sql=mysql.format(sql,[req.params.username])

  pool.query(sql, (err, row) => {
    if(err) return handleSQLError(res, err)
    return res.json(row); 
  })  

} 

const justAllergies = (req, res) => {
  console.log('this is just your allergies')

  let sql='SELECT al.allergy, al.spoonId FROM  usersAllergies AS uAl JOIN allergies AS al ON uAl.allergy=al.allergyId WHERE uAl.active=1 AND uAl.username=?'

  sql=mysql.format(sql,[req.params.username])

  pool.query(sql, (err, row) => {
    if(err) return handleSQLError(res, err)
    return res.json(row); 
  })  

}

//should my post and put get rerouted to the calls so we can see the updates? 

//POST
const addLike = (req, res) => {
  console.log('you have now added a like')

  const {item, spoon} = req.body

  let sql='INSERT INTO likes (username, item, spoonId) VALUES (?, ?, ?)'

  sql=mysql.format(sql,[req.params.username, item, spoon])

  pool.query(sql, (err, results) => {
    if(err) return handleSQLError(res, err)
    return res.json( { newId: results.insertId} ); //double check this
  })  

}

const addDislike = (req, res) => {
  console.log('you have now added a like')

  const {item, spoon} = req.body

  let sql='INSERT INTO dislikes (username, item, spoonId) VALUES (?, ?, ?)'

  sql=mysql.format(sql,[ req.params.username, item, spoon])

  pool.query(sql, (err, results) => {
    if(err) return handleSQLError(res, err)
    return res.json( { newId: results.insertId} ); //double check this
  })  

}

const addDiet = (req, res) => {
  console.log('you have now added a like')

  const {dietId} = req.body

  let sql='INSERT INTO usersDiets (username, diet) VALUES (?, ?)'

  sql=mysql.format(sql,[ req.params.username ,dietId])

  pool.query(sql, (err, row) => {
    if(err) return handleSQLError(res, err)
    return res.json(row); 
  })  

}

const addAllergy = (req, res) => {
  console.log('you have now added a like')

  const { allergy } = req.body

  let sql='INSERT INTO usersAllergies (username, allergy) VALUES (?, ?); '

  sql=mysql.format(sql, [req.params.username , allergy])

  pool.query(sql, (err, results) => {
    if(err) return handleSQLError(res, err)
    return res.json( { newId: results.insertId} ); //double check this
  })  

}

//PUT 
const updatePassword = (req, res) => {
  console.log('you have now update the password for this user')

  const { password } = req.body

  let sql='UPDATE appInfo SET password=? WHERE username=?'

  sql=mysql.format(sql,[password,  req.params.username])

  pool.query(sql, (err, results) => {
    if (err) return handleSQLError(res, err)
    return res.status(204).json();
  })

}

const updateEmail = (req, res) => {
  console.log('you have how update the user information')

  const {email} = req.body

  let sql='UPDATE appInfo SET email=? WHERE username=?'

  sql=mysql.format(sql,[email, req.password.username])

  pool.query(sql, (err, results) => {
    if (err) return handleSQLError(res, err)
    return res.status(204).json();
  })

}

//are we going to be able to do this as a bulk thing or are we going to need to address this of every individual item? 
const updateDisplayPrefAll = (req, res) => {
  console.log('update all of your displays to on or off')

  const {boo} = req.body

  let sql='UPDATE usersDisplayPreferences SET likes=?, dislikes=likes, diets=likes, allergies=likes, city=likes, state=likes, country=likes, email=likes, dobMonth=likes, dobDate=likes, dobYear=likes, phone=likes  WHERE username=?'

  sql=mysql.format(sql,[boo, req.params.username])

  pool.query(sql, (err, results) => {
    if (err) return handleSQLError(res, err)
    return res.status(204).json();
  })
}

const updateDisplayPrefEach = (req, res) => {
  console.log('update each of your display preferences, one at a time')

  //if dobMonth is turned off, then you should not be able to display the dobDate
  const {likes, dislikes, diets, allergies, city, state, country, email, dobMonth, dobDate, dobYear, phone} = req.body

  //make sure if not changes occur, then the body reads as null
  let sql='UPDATE usersDisplayPreferences SET likes=COALESCE(?, likes), dislikes=COALESCE(?, dislikes), diets=COALESCE(?,diets), allergies=COALESCE(?, allergies), city=COALESCE(?, city), state=COALESCE(?, state), country=COALESCE(?, country), email=COALESCE(?, email), dobMonth=COALESCE(?, dobMonth), dobDate=COALESCE(?, dobDate), dobYear=COALESCE(?, dobYear), phone=COALESCE(?, phone)  WHERE username=?'

  sql=mysql.format(sql, [likes, dislikes, diets, allergies, city, state, country, email, dobMonth, dobDate, dobYear, phone, req.params.username])

  pool.query(sql, (err, results) => {
    if (err) return handleSQLError(res, err)
    return res.status(204).json();
  })

}

const updateDisplayPrefDefault = (req, res) => {
  console.log('reset you display preferences to the default ')

  let sql='UPDATE usersDisplayPreferences SET likes=0, dislikes=0, diets=0, allergies=0, city=0, state=0, country=0, email=1, dobMonth=1, dobDate=1, dobYear=0, phone=0, private=0  WHERE username=?'

  sql=mysql.format(sql, [req.params.username])

  pool.query(sql, (err, results) => {
    if (err) return handleSQLError(res, err)
    return res.status(204).json();
  })
}

const updateDisplayPrivate = (req, res) => {
  console.log('update just the private settings')

  const {boo} = req.body

  let sql = 'UPDATE usersDisplayPreferences SET private=? WHERE username=?'

  sql=mysql.format(sql, [boo, req.params.username])

  pool.query(sql, (err, results) => {
    if(err) return handleSQLError(res, err)
    return res.status(204).json
  })
}

const updateBirthday = (req, res) => {
  console.log('you have now updated your birthday')

  const {month, date, year} = req.body

  //if nothing is passed in or changed, make sure the body reads 'null' for those lines 
  let sql='UPDATE usersDetails SET dobYear=COALESCE(?, dobYear), dobDate=COALESCE(?, dobDate), dobMonth=COALESCE(?, dobMonth) WHERE username=?'

  sql=mysql.format(sql,[month, date, year, req.params.username])

  pool.query(sql, (err, results) => {
    if (err) return handleSQLError(res, err)
    return res.status(204).json();
  })

}

const updateLocation = (req, res) => {
  console.log('you have now update your location')

  const {address, city, state, zip, country} = req.body

  let sql='UPDATE usersLocations SET address=COALESCE(?, address), city=COALESCE(?, city), state=COALESCE(?, state), zipcode=COALESCE(?, zipcode), country=COALESCE(?,country) WHERE username=?'

  sql=mysql.format(sql,[address, city, state, zip, country, req.params.username])

  pool.query(sql, (err, row) => {
    if (err) return handleSQLError(res, err)
    return res.status(204).json();
  })

}

const updatePhoneNum = (req, res) => {
  console.log('you have not update the phone number')

  const {phone} = req.body

  let sql='UPDATE usersDetails SET phone=? WHERE username=?'

  sql=mysql.format(sql,[phone ,req.params.username])

  pool.query(sql, (err, results) => {
    if (err) return handleSQLError(res, err)
    return res.status(204).json();
  })

}

const removeLike = (req, res) => {
  console.log('you have now removed a like from this user')

  let sql='UPDATE likes SET active=0 WHERE likeId=? AND username=?'

  sql=mysql.format(sql,[req.params.id, req.params.username])

  pool.query(sql, (err, results) => {
    if (err) return handleSQLError(res, err)
    return res.status(204).json();
  })
}

const removeDislike = (req, res) => {
  console.log('you have now removed a like from this user')

  let sql='UPDATE dislikes SET active=0 WHERE dislikeId=? AND username=?'

  sql=mysql.format(sql,[req.params.id, req.params.username])

  pool.query(sql, (err, results) => {
    if (err) return handleSQLError(res, err)
    return res.status(204).json();
  })
}

const removeDiet = (req, res) => {
  console.log('you have now removed a like from this user')

  let sql='UPDATE usersDiets SET active=0 WHERE uDietId=? AND username=?'

  sql=mysql.format(sql,[req.params.id, req.params.username])

  pool.query(sql, (err, results) => {
    if (err) return handleSQLError(res, err)
    return res.status(204).json();
  })
}

const removeAllergy = (req, res) => {
  console.log('you have now removed a like from this user')

  let sql='UPDATE usersAllergies SET active=0 WHERE uAllergyId=? AND username=?'

  sql=mysql.format(sql,[req.params.id, req.params.username])

  pool.query(sql, (err, results) => {
    if (err) return handleSQLError(res, err)
    return res.status(204).json();
  })

}


module.exports = { 
  justUserInfo,
  justDisplayPrefer,
  justLocation,
  justBirthday,
  justLikes,
  justDislikes,
  justDiets,
  justAllergies,
  addLike, 
  addDislike, 
  addDiet,
  addAllergy,
  updatePassword,
  updateEmail, 
  updateDisplayPrefAll,
  updateDisplayPrefEach,
  updateDisplayPrefDefault,
  updateDisplayPrivate,
  updateBirthday,
  updateLocation,  
  updatePhoneNum,
  removeLike,
  removeDislike,
  removeDiet,
  removeAllergy
}