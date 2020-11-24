import React from 'react';
import MenuItem from '@material-ui/core/MenuItem'
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';


const foodSearchBar = () => {

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
