import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MoreVertIcon from '@material-ui/icons/MoreVert';

const ITEM_HEIGHT = 48;

//need to tie in shop list actions here

const ItemActions = (props) => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const options = [
    'Update',
    'Remove'
  ];

  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleDelete = () => {
    //need to add actions here 
  }

  const handleUpdate = () => {
    //need to add actions here 
  }


  return (
    <div>
      <IconButton
        aria-label="more"

        aria-haspopup="true"
        onClick={handleClick}
      >
       
      </IconButton>
      <Menu
      
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
  );
}

export default ItemActions