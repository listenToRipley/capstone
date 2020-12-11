import React, {useEffect} from 'react';
import MenuItem from '@material-ui/core/MenuItem'
import SearchIcon from '@material-ui/icons/Search';
import {useInput} from '../Hooks/inputHook';
import { TextField } from '@material-ui/core';

const foodSearchBar = (props) => {
  console.log('search result on food search bar',props.searchResults)

  let {value:searchWord, bind:bindSearchWord, reset:resetSearchWord} = useInput('')

  const handleSearch = (e) => {
  
    if(e.key === 'Enter' || e.key==='Return') {
      props.findFood(bindSearchWord.value)
    }
  }

  useEffect((e) => {
    if(bindSearchWord){
      console.log('reset the search result to empty///')  
    }
  })

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
     />
    </MenuItem>
   </div>

  )
}

export default foodSearchBar
