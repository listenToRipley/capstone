import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

const CloseSearch = (props) => {
  
  return (
     <IconButton edge="start" color="inherit" onClick={() => 'need to reset the search'} aria-label="close">
       <CloseIcon />
     </IconButton>
  )
}

export default CloseSearch