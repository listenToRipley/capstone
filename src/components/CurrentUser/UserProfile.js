import React from 'react';

//display information from user sign up 
  //name
  //email
  //password 
  //birthday
//option to update information - button for update and save those updates 
  //setting for others to view -toggles 

//likes  - favorites 
//dislikes 
//diets 
//allergies 

//SAVE BUTTON TO COMMIT ANY CHANGES

//need a view mode ~ see pal profile 


const UserProfile = () => {

  return (
    <div>
      <button>Edit</button>
      <h1>USERNAME Profile</h1>
      <div>
      <h2>User info</h2>
      <p>Name</p>
      <p>password - edit mode only</p>
      <p>birthday</p>
      <h4>location</h4>
        <div>
          <p>address</p>
          <p>city</p>
          <p>state</p>
          <p>country</p>
        </div>
        <h4>contact info</h4> 
          <div>
            <p>email</p>
            <p>phone</p>
          </div>
      </div>
      <div>
      <h3>Preferences</h3>
        <p>likes</p>
        <p>dislikes</p>
        <p>allergies</p>
        <p>diets</p>
      </div>

      <div>
        <h3>Display Preferences - update by toggle</h3>
        <p>birthday</p>
        <p>location</p>
        <p>email</p>
        <p>phone</p>
        <p>likes</p>
        <p>dislikes</p>
        <p>allergies</p>
        <p>diets</p>
      </div>
      <button>Save</button>
    </div>
  )
}

export default UserProfile