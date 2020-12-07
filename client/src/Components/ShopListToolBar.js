import React from 'react';
import {useEffect, useState} from 'react'
import { lighten, makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx'
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import { library, dom } from '@fortawesome/fontawesome-svg-core';
import { faShoppingBasket, faCartArrowDown, faPlusCircle, faCogs  } from '@fortawesome/free-solid-svg-icons';
import { withStyles } from '@material-ui/styles';
import FoodSearchBar from './FoodSearchBar';
import './toolbar.css'

library.add(faShoppingBasket, faCartArrowDown, faPlusCircle, faCogs) 
dom.watch()

const useToolbarStyles = makeStyles((theme) => ({
  root: {
    // paddingLeft: theme.spacing(3),
    // paddingRight: theme.spacing(1),
    display: 'flex',
    justifyContent: 'space-around',
    alignSelf: 'start',
    padding: '2%'
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
}));

const ShopListToolBar = (props) => {
  const classes = useToolbarStyles();
  console.log('shopping list tool bar props : ', props)
  const {numSelected} = props

  let {findFood, setFindFood} = useState(false)
  let {shopping, setShopping} = useState(false)

  const openSearch = (e) => {
    e.preventDefault();
    console.log('you want to search for food')
    setShopping=true
  }

  const startShopping = (e) => {
    e.preventDefault();
    console.log('so you want to start shopping')
    setShopping=true
  }

  const doneShopping = (e) => {
    e.preventDefault();
    console.log('your done shopping, should get added to pantry now')
    setShopping=false
  }

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
          Your Shopping List 
        </Typography>
      )}
          {setFindFood ? 
            <div className='searchbar'>
          <MenuItem className='search'>
           <FoodSearchBar/>
          </MenuItem>
         </div>
            :
         <Tooltip className="add" title="Add Item to your shopping list">
           <IconButton aria-label="add item to shopping list"
           onClick={openSearch}>
           <svg className="fas fa-plus-circle"></svg>
           </IconButton>
         </Tooltip>
         }
       
         {setShopping ? (
        <Tooltip title="Finished Shopping">
          <IconButton aria-label="finish shopping"
          onClick={doneShopping}>
          <svg className="fas fa-cart-arrow-down"/> 
          </IconButton>
        </Tooltip>
      ) : (
        <Tooltip title="Start Shopping">
          <IconButton aria-label="start shopping"
          onClick={startShopping}>
          <svg className="fas fa-shopping-basket"/>
          </IconButton>
        </Tooltip>
        )}
     </Toolbar>

  )
}

export default ShopListToolBar