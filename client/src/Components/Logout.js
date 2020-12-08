import React, {useEffect} from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { Link } from 'react-router-dom';
import { library, dom } from '@fortawesome/fontawesome-svg-core';
import { faSignOutAlt} from '@fortawesome/free-solid-svg-icons';


library.add(faSignOutAlt)
dom.watch()

const Logout = (props) => {
  console.log(props)

  const loggingOut = e => {
    e.preventDefault()
    return props.logout(false)
  }

  useEffect(() => {
    if(props.state.user.validation===false) {
      window.location.replace('/')
    }

  })

  return(
    <ListItem 
    button 
    component={Link}
    onClick={loggingOut}
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