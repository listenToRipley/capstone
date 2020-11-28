import React from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton  from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import MenuItem from '@material-ui/core/MenuItem'
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import { library, dom } from '@fortawesome/fontawesome-svg-core';
import { faPlusCircle, faCogs } from '@fortawesome/free-solid-svg-icons';
import PantryActions from './PantryActions';
import './Pantrycss.css'

library.add( faPlusCircle, faCogs) 
dom.watch()

//this will be actions that can be taken on the pantry as a whole
const PantryToolbar = (props) => {

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
        Your Pantry
         </Typography>
         <div className='searchbar'>
          <MenuItem className='search'>
           <div className='searchIcon'>
             <SearchIcon />
           </div>
           <InputBase
             placeholder="Search…"
             className={'inputRoot','inputInput'}
             
             inputProps={{ 'aria-label': 'search' }}
           />
          </MenuItem>
         </div>
    
         <Tooltip className="add" title="Add Item to Pantry">
           <IconButton aria-label="add item to pantry">
           <svg className="fas fa-plus-circle"></svg>
           </IconButton>
         </Tooltip>
       
         <div
         className='settings'>
          <Tooltip title="Pantry Settings">
           <PantryActions/>
         </Tooltip> 
         </div>
     </Toolbar>

  )
}

export default PantryToolbar