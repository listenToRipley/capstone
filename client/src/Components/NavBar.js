import React, {useState, useEffect} from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import CssBaseline from '@material-ui/icons/Menu'; 
import { library, dom } from '@fortawesome/fontawesome-svg-core';
import { faShoppingBasket, faDoorClosed, faUsers, faHome, faUtensils, faSignOutAlt, faPeopleArrows, faCarrot} from '@fortawesome/free-solid-svg-icons';
import { faUserCircle }from '@fortawesome/free-regular-svg-icons';
import { Link } from 'react-router-dom';
import {useHistory} from 'react-router-dom'
import Logout from '../Containers/Logout'
import {drawerState} from '../redux/actions/drawerState'
import cookie from 'cookie'

//svg icons 
library.add(faShoppingBasket,faDoorClosed, faUsers, faHome, faUtensils, faUserCircle, faSignOutAlt, faPeopleArrows, faCarrot)
dom.watch()

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    position: 'absolute !important' 
  },
  toolbar: theme.mixins.toolbar,
  appBar: {
    toolbar: theme.mixins.tool,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  title:{
    marginLeft: `calc(100% - ${window.innerWidth/1.5}px)`,
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  }
}));

const NavBar = (props) => {

  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = useState(false);

  let {validation, username} = props.user
  let {run} = props.userDetails

  const history = useHistory()

  const handleDrawerOpen = () => {
    setOpen(true);
  }; 

  const handleDrawerClose = () => {
    setOpen(false);

  };

  useEffect(() => {
    
    if (validation && run=== false) {
      let {token} = props.user.pass 

      return props.getDetails(token={token}, username={username})
    } 

  })

  return (
    <div>
      <div className={classes.root} style={{position: "fixed"}}>
    
    <CssBaseline/>
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar position="fixed">
          <IconButton
            position="sticky"
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <Typography className={classes.title} variant="h6" noWrap>
            Pantry Pals
          </Typography>
        </Toolbar>
      </AppBar>
      {validation === true ? 
      <Drawer
        className={classes.drawer}
        variant="persistent"
        position="absolute"
        anchor="left"
        open={open}
        onChange={()=> drawerState()}
        classes={{
          paper: classes.drawerPaper
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </div>
        <Divider />
        <List>

              <ListItem 
              button 
              component={Link} 
              to='/home'
              aria-label='home'
              onChange={handleDrawerClose}
              >
              <ListItemIcon>
                 <svg className="fas fa-home"></svg>
              </ListItemIcon>
              <ListItemText primary={'Home'} />
            </ListItem>
   
            <ListItem 
            button 
            component={Link}
            to='/shoppingList'
            aria-label='shopping list'
            >
              <ListItemIcon>
              <svg className="fas fa-shopping-basket"></svg>
              </ListItemIcon>
              <ListItemText primary={'Shopping List'} />
            </ListItem>

            <ListItem 
            button 
            component={Link}
            to='/pantry'
            aria-label='pantry'
              >
              <ListItemIcon>
              <svg className="fas fa-door-closed"></svg>
              </ListItemIcon>
                <ListItemText primary={'Pantry'} />
            </ListItem>

            <ListItem 
            button 
            component={Link}
            to='/palList'
            aria-label='pal list'
            >
              <ListItemIcon>
              <svg className="fas fa-users"></svg>
              </ListItemIcon>
                <ListItemText primary={`Pal's List`} />
            </ListItem>
        </List>
        <Divider />
        <Divider />
        <List>
  
            <ListItem 
            button 
            component={Link}
            to='/shoppingList/requests'
            aria-label='shopping request'
            >
             <ListItemIcon>
                <svg className="fas fa-utensils"></svg>
              </ListItemIcon>
                <ListItemText primary={'Shopping Requests'} />
            </ListItem>

            <ListItem 
            button 
            component={Link}
            to='/palList/requests'
            aria-label='pal request'
            >
              <ListItemIcon>
              <svg className="fas fa-people-arrows"></svg>
              </ListItemIcon>
                <ListItemText primary={'Pal Requests'} />
            </ListItem>
        </List>
        <Divider />
        <List>
      
          <ListItem 
          button 
          component={Link}
          to='/profile'
          aria-label='your profile'
          >
              <ListItemIcon>
              <svg className="far fa-user-circle"></svg>
              </ListItemIcon>
              <ListItemText primary={'Profile'} />
            </ListItem>

          <Logout/>
        
        </List>
      </Drawer>
      :
      <div>
      <Drawer
        className={classes.drawer}
        position="absolute"
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose} >
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </div>

      <List>
          <ListItem
            button
            component={Link} 
            to='/about'
            aria-label='about'
            className={classes.about}
            >
            <ListItemIcon>
              <svg className="fas fa-carrot"></svg>
            </ListItemIcon>
            <ListItemText primary={'About'} />
            </ListItem> 
        <ListItem 
              button 
              component={Link} 
              to='/'
              aria-label='login'
              >
              <ListItemIcon>
                 <svg className="fas fa-home"></svg>
              </ListItemIcon>
              <ListItemText primary={'Login'} />
            </ListItem>
        <ListItem 
            button 
            component={Link} 
            to='/createNewUser'
            aria-label='create Login'
            >
            <ListItemIcon>
               <svg className="far fa-user-circle"></svg>
            </ListItemIcon>
            <ListItemText primary={'Create Login'} />
        </ListItem>
      </List>
      </Drawer>
      </div>
  }    
    </div>
    <div className={classes.toolbar} />
    </div>
  );
}

export default NavBar

