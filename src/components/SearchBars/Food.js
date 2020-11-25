import React from 'react';
import {useState} from 'react'
import MenuItem from '@material-ui/core/MenuItem'
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import Food from '../Food/Food';
import {useInput} from '../../Hooks/inputHook';



const foodSearchBar = (props) => {
  console.log('are you hitting?')


  const handleSearch = () => {

  }

  return(

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
  )
   
}

export default foodSearchBar

