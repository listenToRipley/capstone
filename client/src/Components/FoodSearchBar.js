import React from 'react';
import {useState} from 'react'
import MenuItem from '@material-ui/core/MenuItem'
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import {useInput} from '../Hooks/inputHook';
import { TextField } from '@material-ui/core';

const foodSearchBar = (props) => {
  console.log('props on search bar ? ', props)

  let {value:searchWord, bind:bindSearchWord, reset:resetSearch} = useInput('')


  const handleSearch = (e) => {
    //need to map for search result using food. 
    if(e.key === 'Enter' || e.key==='Return') {
      console.log('you pressed enter or return!')
    }
  }

  if(!open) return null

  console.log('are you hitting?', bindSearchWord.value)

  return(

    <div className='searchbar'>
    <MenuItem className='search'>
     <div className='searchIcon'>
       <SearchIcon />
     </div>
     <TextField
        {...bindSearchWord}
       placeholder="Find Food to Add"
       aria-lable="find food"
       id="searchWord"
       name="searchWord"
       type="text"
       onKeyPress={handleSearch}
       margin="normal"
       autoFocus
     />
    </MenuItem>
   </div>

  )
}

export default foodSearchBar
