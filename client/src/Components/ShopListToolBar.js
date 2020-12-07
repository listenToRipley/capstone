import React from 'react';
import {useEffect, useState} from 'react'
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { lighten, makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import { library, dom } from '@fortawesome/fontawesome-svg-core';
import { faShoppingBasket, faCartArrowDown, faPlusCircle, faCogs  } from '@fortawesome/free-solid-svg-icons';
import { withStyles } from '@material-ui/styles';
import Button from '@material-ui/core/Button'
import FoodSearchBar from './FoodSearchBar';
import './toolbar.css'
import Food from './Food/Food';

library.add(faShoppingBasket, faCartArrowDown, faPlusCircle, faCogs) 
dom.watch()

const ShopListToolBar = (props) => {

  let {findFood, setFindFood} = useState(false)

  const handleItemAdd = (e) => {
    //add items to add 
    console.log('you want to add an item!')
      
  }

  const handFindPantryItem = (e) => {
    //see if you currently have something in your pantry
    console.log('you want to find an item in your pantry?')
  }

  return (

      <Toolbar className='root'>
        <Typography
        className='title'> 
        Your Shopping List
         </Typography>
          {setFindFood ? 
            <div className='searchbar'>
          <MenuItem className='search'>
           <FoodSearchBar/>
          </MenuItem>
         </div>
            :
         <Tooltip className="add" title="Add Item to Pantry">
           <IconButton aria-label="add item to pantry">
           <svg className="fas fa-plus-circle"></svg>
           </IconButton>
         </Tooltip>
         }
       
         <div
         className='settings'>
          <Tooltip title="Pantry Settings">
           <PantryActions/>
         </Tooltip> 
         </div>
     </Toolbar>

  )
}

export default ShopListToolBar