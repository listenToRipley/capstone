import React, {useState} from 'react';
import clsx from 'clsx';
import { fade , makeStyles, useTheme } from '@material-ui/core/styles';
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
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import CssBaseline from '@material-ui/icons/Menu'; 
import { library, dom } from '@fortawesome/fontawesome-svg-core';
import { faShoppingBasket, faDoorClosed, faUsers, faHome, faUtensils, faSignOutAlt, faPeopleArrows} from '@fortawesome/free-solid-svg-icons';
import { faUserCircle }from '@fortawesome/free-regular-svg-icons';
import { Link } from 'react-router-dom';

//svg icons 
library.add(faShoppingBasket,faDoorClosed, faUsers, faHome, faUtensils, faUserCircle, faSignOutAlt, faPeopleArrows)
dom.watch()

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
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
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 1),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
}));

const NavBar = () => {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

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
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            Pantry Pals
          </Typography>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </div>
        <Divider />
        <List>
          {/* main app content available on the home page - needs to be links*/}

              <ListItem 
              button 
              component={Link} 
              to='/home'
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
          {/* main app content available on the home page - elements related to list functionality*/}
            <ListItem 
            button 
            component={Link}
            to='/shoppingList/requests'
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
            >
              <ListItemIcon>
              <svg className="fas fa-people-arrows"></svg>
              </ListItemIcon>
                <ListItemText primary={'Pal Requests'} />
            </ListItem>
        </List>
        <Divider />
        <List>
          {/* functional routes related to the user - needs to be links */}
          <ListItem button 
          // onClick={<Link to='/userProfile'/>}
          >
              <ListItemIcon>
              <svg className="far fa-user-circle"></svg>
              </ListItemIcon>
              <ListItemText primary={'Profile'} />
            </ListItem>

            <ListItem 
            button 
            component={Link}
            to='/'
            >
              <ListItemIcon>
              <svg className="fas fa-sign-out-alt"></svg>
              </ListItemIcon>
              <ListItemText primary={'Sign Out'} />
            </ListItem>
        </List>
      </Drawer>
    </div>
    <div className={classes.toolbar} />
    </div>
  );
}

export default NavBar

//from https://material-ui.com/components/drawers/