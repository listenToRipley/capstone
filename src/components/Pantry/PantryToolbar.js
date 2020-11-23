import React from 'react';
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
import './Pantrycss.css'

library.add( faPlusCircle, faCogs) 
dom.watch()

//this will be actions that can be taken on the pantry as a whole
const PantryToolbar = (props) => {

  const handleItemAdd = () => {
    //add items to add 
      
  }

  const handFindPantryItem = () => {
    
  }

  return (
    <div className='root' >
      <Toolbar>
        <Typography 
        className='title' 
        > 
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

         <div
         className='add'>
         <Tooltip title="Add Item to Pantry">
           <IconButton aria-label="add item to pantry">
           <svg className="fas fa-plus-circle"></svg>
           </IconButton>
         </Tooltip>

         </div>
         
         <div
         className='settings'>
         <Tooltip title="Pantry Settings">
           <IconButton aria-label="pantry setting">
           <PantryActions/>
           </IconButton>
         </Tooltip>
         </div>

     </Toolbar>
    </div>
  );
};


export default PantryToolbar