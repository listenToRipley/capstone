import React from 'react';

//display information from all users without a private setting 
  //username
  //first name 
  //pal list 

//MUST REVIEW THE DISPLAY PREFERENCES OF THE USING AND DISPLAY INFORMATION BASED OFF OF THOSE REQUESTS
  //email
  //password 
  //birthday

//likes  - favorites 
//dislikes 
//diets 
//allergies 
//need a view mode 

//IF PAL 
  //links 
    //pantry
    //shopping list 

const PalProfile = () => {

  const handleDisplayPrefs = () => {
    //pull what the users' current display preferences. Depending on this response, we can determine which elements will be displayed. 
    //determine if user is set to private or not 
  }

  return (
    <div>
    <h1>USERNAME Profile</h1>
    <h2>all information must be checked against user's display preferences and outlined that way</h2>
    <h4>IF PALS</h4>
    <a>User's pantry</a>
    <a>User's shopping</a>
    <a>User's pal</a>
    </div>
  )
}

export default PalProfile