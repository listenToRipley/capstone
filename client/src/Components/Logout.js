import React from 'react';
import {useHistory} from 'react-browser-router';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { Link } from 'react-router-dom';
import { library, dom } from '@fortawesome/fontawesome-svg-core';
import { faSignOutAlt} from '@fortawesome/free-solid-svg-icons';

library.add(faSignOutAlt)
dom.watch()

const Logout = (props) => {

  return(
    <ListItem 
    button 
    component={Link}
    onClick={() => {console.log('you want to log out')}}
    to='/'
    aria-label='sign out'
    >
      <ListItemIcon>
      <svg className="fas fa-sign-out-alt"></svg>
      </ListItemIcon>
      <ListItemText primary={'Sign Out'} />
    </ListItem>
  )
}

export default Logout