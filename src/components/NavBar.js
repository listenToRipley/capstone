import React from 'react';
import {AppBar, Toolbar, Typography} from '@material-ui/core';

const NavBar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="subtitle1" color="inherit">Pantry Pal</Typography>
      </Toolbar>
    </AppBar>
  )
}

export default NavBar;