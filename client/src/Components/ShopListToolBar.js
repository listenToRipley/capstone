import React from 'react';
import {useEffect} from 'react'
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { lighten, makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import { library, dom } from '@fortawesome/fontawesome-svg-core';
import { faShoppingBasket, faCartArrowDown } from '@fortawesome/free-solid-svg-icons';
import { withStyles } from '@material-ui/styles';


library.add(faShoppingBasket, faCartArrowDown) 
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

const ShopListToolBar = (props) => {

  console.log('props on the shop list tool bar', props)

  const classes = useToolbarStyles();
  const { numSelected } = props;
console.log('what is number selected? ',numSelected)
  return (
    <Toolbar
      className={clsx(classes.root, {
        [classes.highlight]: numSelected > 0,
      })}
    >
      {numSelected > 0 ? (
        <Typography className={classes.title} color="inherit" variant="subtitle1" component="div">
          {numSelected} selected
        </Typography>
      ) : (
        <Typography className={classes.title} variant="h6" id="tableTitle" component="div">
        {/* This will have to be  imported from SQL*/}
          Your Shopping List 
          {/* add items there needs to be a button here */}
        </Typography>
      )}

      {numSelected > 0 ? (
        <Tooltip title="Finished Shopping">
          <IconButton aria-label="finish shopping">
          <svg className="fas fa-cart-arrow-down"/> 
          </IconButton>
        </Tooltip>
      ) : (
        <Tooltip title="Start Shopping">
          <IconButton aria-label="start shopping">
          <svg className="fas fa-shopping-basket"/>
          </IconButton>
        </Tooltip>
        )}
    </Toolbar>
  );
};

ShopListToolBar.propTypes = {
  numSelected: PropTypes.number.isRequired

}

export default ShopListToolBar