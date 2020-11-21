import React from 'react';
import { fade , makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Divider from '@material-ui/core/Divider'
import Toolbar from '@material-ui/core/Toolbar';
import MenuItem from '@material-ui/core/MenuItem';
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
    height:'10vh',
    width: '100vw',
    marginBottom: 100
  },
  grid: {
    padding: theme.spacing(2),
    marginRight: theme.spacing(2),
  },
  toolbar: {
    margin: 5,
    padding: theme.spacing(2),
    textAlign: 'center',
  },
  title: {
    padding: 5,
    display: 'none',
    justifyContent: 'center',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
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
  settingIcon: {
    paddingRight: '50%',
    justifyContent: 'right',
  },
}));
  
  //This will only be available if this list belongs to the current user 
  const PalsToolbar = (props) => {
  const classes = useStyles();
  
  return (
    <Box
      className="root"
      >
     <Grid 
    container
    className={classes.grid}
        justify="space-evenly"
        alignItems="center"
        spacing={4}
      >
     <Paper className={classes.toolbar}>
      <Grid item xs={12} square >
        <Typography className={classes.title}>
          USERNAME'S Pal List : NAME USER ASSIGNED TO PAL LIST
        </Typography>
      </Grid>
        <Divider/>
       <Toolbar
          title="Pal List Tool Bar">
        <Grid
          container
          justify="space-around"
          alignItems="center"
          spacing={6}
          >
        <Grid item xs={9} square>
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
        </Grid> 
        <Grid item xs={3} square>
          <IconButton
          className={classes.settingIcon}
          aria-label="pal list settings">
          <svg className="fas fa-cogs"></svg>
          </IconButton>
          </Grid>
        </Grid>
        </Toolbar>
      </Paper>
    </Grid>
    </Box>
  )
};  

export default withStyles(useStyles)(PalsToolbar)