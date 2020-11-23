import React from 'react';
import { lighten, makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import IconButton  from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import { library, dom } from '@fortawesome/fontawesome-svg-core';
import { faShoppingBasket, faCartArrowDown, faPlusCircle, faCogs } from '@fortawesome/free-solid-svg-icons';
import PantryActions from './PantryActions'

library.add(faShoppingBasket, faCartArrowDown, faPlusCircle, faCogs) 
dom.watch()

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
    flex: '1 1 90%',
  },
}));


//this will be actions that can be taken on the pantry as a whole
const PantryToolbar = (props) => {
  const classes = useToolbarStyles();
  const { numSelected } = props;

  const handleItemAdd = () => {
    //add items to add 
      
  }

  return (
    <Paper
      className={classes.root}>
      <Toolbar>
        <Typography className={classes.title} variant="h6" id="tableTitle" component="div">
         {/* This will have to be  imported from SQL*/}
           Your Pantry
           {/* add items there needs to be a button here */}
         </Typography>

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
    </Paper>
  );
};
  

export default PantryToolbar