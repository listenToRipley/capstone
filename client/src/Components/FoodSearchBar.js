import React from 'react';
import MenuItem from '@material-ui/core/MenuItem'
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import {useInput} from '../Hooks/inputHook';
import { TextField } from '@material-ui/core';

const foodSearchBar = (props) => {
  console.log('search result on food search bar',props.searchResults)

  let {value:searchWord, bind:bindSearchWord, reset:resetSearchWord} = useInput('')

  const handleSearch = (e) => {
    //need to map for search result using food. 
    if(e.key === 'Enter' || e.key==='Return') {
      props.findFood(bindSearchWord.value)
    }
  }

  const handleReset = (e) => {

    if(bindSearchWord===undefined){
      console.log('reset the search result to empty///')  
    }
  }

  if(!open) return null

  return(

    <div>
    <MenuItem className='search'>
     <div>
       <SearchIcon />
     </div>
     <TextField
        {...bindSearchWord}
       placeholder="Search Foods"
       id="searchWord"
       name="searchWord"
       type="text"
       onKeyPress={handleSearch}
       margin="normal"
       autoFocus
       onChange={handleReset}
     />
    </MenuItem>
   </div>

  )
}

export default foodSearchBar
