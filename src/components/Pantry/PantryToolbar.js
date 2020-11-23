import React from 'react';
import { fade ,lighten, makeStyles } from '@material-ui/core/styles';
import { withStyles } from '@material-ui/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import IconButton  from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import MenuItem from '@material-ui/core/MenuItem'
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import { library, dom } from '@fortawesome/fontawesome-svg-core';
import { faPlusCircle, faCogs } from '@fortawesome/free-solid-svg-icons';
import PantryActions from './PantryActions';

library.add( faPlusCircle, faCogs) 
dom.watch()

const useToolbarStyles = makeStyles((theme) => ({
  root: {
    paddingLeft: theme.spacing(3),
    paddingRight: theme.spacing(1),
  },
  // highlight:
  //   theme.palette.type === 'light'
  //     ? {
  //         color: theme.palette.secondary.main,
  //         backgroundColor: lighten(theme.palette.secondary.light, 0.85),
  //       }
  //     : {
  //         color: theme.palette.text.primary,
  //         backgroundColor: theme.palette.secondary.dark,
  //       },
  title: {
    flex: '1 1 90%',
  },
  search: {
    position: 'relative',
    margin: 10,
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    }
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 1),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '40ch',
    },
    marginRight: 100
  }, 
}));


//this will be actions that can be taken on the pantry as a whole
const PantryToolbar = (props) => {
const classes = useToolbarStyles();


  const handleItemAdd = () => {
    //add items to add 
      
  }

  const handFindPantryItem = () => {
    //see if you currently have something in your pantry
  }

  return (
    <div
    className={classes.root}
      >
      <Toolbar>
        <Typography 
        className={classes.title} > 
        Your Pantry
         </Typography>

         <div>
          <MenuItem className={classes.search}>
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
          </MenuItem>

         </div>

         <Tooltip title="Add Item to Pantry">
           <IconButton aria-label="add item to pantry">
           <svg className="fas fa-plus-circle"></svg>
           </IconButton>
         </Tooltip>

         <Tooltip title="Pantry Settings">
           <IconButton aria-label="pantry setting">
           <PantryActions/>
           </IconButton>
         </Tooltip>

     </Toolbar>
    </div>
  );
};
  
export default withStyles(useToolbarStyles)(PantryToolbar)