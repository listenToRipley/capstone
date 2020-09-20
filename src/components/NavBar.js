import React from 'react';
import {AppBar, Toolbar, Typography} from '@material-ui/core';
import { Link } from 'react-router-dom'; 

const NavBar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="subtitle1" color="inherit">Pantry Pal</Typography>

        <ul>

        <li>
            <Link to='/home'>Home</Link>
          </li>

          <li>
            <Link to='/userProfile'>Profile</Link>
          </li>

          <li>
            <Link to='/shoppingList'>Shopping List</Link>
          </li>

          <li>
            <Link to='/pantry'>Pantry</Link>
          </li>

          <li>
            <Link to='/friendsList'>Friend's List</Link>
          </li>

        </ul>
      </Toolbar>
    </AppBar>
  )
}

export default NavBar;