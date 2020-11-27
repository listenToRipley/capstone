import React from 'react'
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { library, dom } from '@fortawesome/fontawesome-svg-core';
import { faCogs } from '@fortawesome/free-solid-svg-icons';

library.add(faCogs) 
dom.watch()

const ITEM_HEIGHT = 48;

const PantryActions = () => {

  const [anchorEl, setAnchorEl] = React.useState(null);

  const options = [
    'Update Name'
  ];

   const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleNameUpdate = () => {
    //add action here 
  }

  return (

    <div>
    <IconButton
      aria-label="more"
      aria-controls="pantry settings"
      aria-haspopup="true"
      onClick={handleClick}
    >
      <svg className="fas fa-cogs"></svg>
    </IconButton>
    <Menu
      id="long-menu"
      anchorEl={anchorEl}
      keepMounted
      open={open}
      onClose={handleClose}
      PaperProps={{
        style: {
          maxHeight: ITEM_HEIGHT * 4.5,
          width: '20ch',
        },
      }}
    >
      {options.map((option) => (
        <MenuItem key={option} selected={option === 'Update'} onClick={handleClose}>
          {option}
        </MenuItem>
      ))}
    </Menu>
  </div>
  )
}

export default PantryActions 