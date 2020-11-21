import React from 'react';
import { lighten, fade , makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import MenuItem from '@material-ui/core/MenuItem';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import { library, dom } from '@fortawesome/fontawesome-svg-core';
import { faCogs} from '@fortawesome/free-solid-svg-icons';
import { withStyles } from '@material-ui/styles';
import PalsListActions from './PalsListActions'

library.add(faCogs)
dom.watch()

//!!!IMPORTANT NOTE ~ there will be two versions of the pal list. 

  //need to add search
  //update pals list 

const useStyles = makeStyles((theme) => ({
  root: {
    width: '90%',
    marginTop: theme.spacing(4),
  },
  title: {
    flexGrow: 1,
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },

  search: {

    position: 'relative',
    marginLeft: 100,
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto'
    },
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
      width: '20ch',
    },
  },
  table: {
    minWidth: 450,
  },
  visuallyHidden: {
    border: 0,
    clip: 'rect(0 0 0 0)',
    height: 1,
    margin: -1,
    overflow: 'hidden',
    padding: 0,
    position: 'absolute',
    top: 20,
    width: 1,
  }
}));


const useToolbarStyles = makeStyles((theme) => ({
  root: {
  paddingLeft: theme.spacing(3),
  paddingRight: theme.spacing(1),
  },
  highlight:
  theme.palette.type === 'light'
    ? {
        color: theme.palette.secondary.main,
        backgroundColor: lighten(theme.palette.secondary.light, 0.85),
      }
    : {
        color: theme.palette.text.primary,
        backgroundColor: theme.palette.secondary.dark,
      },
  title: {
  flex: '1 1 80%',
  },
  }));
  
  //This will only be available if this list belongs to the current user 
  const PalsToolbar = (props) => {
  const classes = useToolbarStyles();
  
  return (
    <Paper className="toolBar">
      <Toolbar
          title="Update Pal List Settings">
        <Typography>USERNAME'S Pal List : NAME USER ASSIGNED TO PAL LIST</Typography>
      
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
          <IconButton
          aria-label="pal list settings">
          <svg className="fas fa-cogs"></svg>
          </IconButton>
        
      </Toolbar>
    </Paper>
  )
  };  

export default withStyles(useStyles)(PalsToolbar)