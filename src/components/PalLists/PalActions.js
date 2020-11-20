import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import PalListActions from './PalListActions'
import PalActions from './PalActions'

const ITEM_HEIGHT = 48;

//need to tie in shop list actions here

const PalsActions = (props) => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const options = [
    'Send Merge Request',
    'Update Role',
    'Un-Pal',
    'Block Pal'
  ];

  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleMergeRequest = () => {
    //add action to send a merge request to a user
  }


  const handleUpdate = () => {
    //need to add actions here 
  }

  const handleRemove = () => {
    //need to add actions here 
  }

  const handleBlock = () => {
        //need to add actions here 
  }

  return (
    <div>
      <IconButton
        aria-label="more"
        aria-controls="long-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MoreVertIcon />
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
  );
}

export default PalsActions