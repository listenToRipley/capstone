import React, {useState} from 'react';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MoreVertIcon from '@material-ui/icons/MoreVert';

const ITEM_HEIGHT = 48;

//need to tie in shop list actions here

const ItemActions = (props) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [id, setId] = useState(props.item)
  const [selected, upSeleted] = useState(false)

  // console.log('id', id)

  const open = Boolean(anchorEl);

  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleDelete = (e) => {
    //need to add actions here 
    console.log('you are trying to delete this', props.index)
    // props.deleteItem(props.index)
    
  }

  const handleUpdate = (e) => {
    //need to add actions here 
    console.log(' you are trying to update this')
    //this field has to be changed to an text field here. 
    // props.updateItem(props.index)
  }


  return (
    <div>
      <IconButton
        aria-label="more"

        aria-haspopup="true"
        onClick={handleClick}
      >
       <MoreVertIcon/>
      </IconButton>
      <Menu
        onClick={handleClose}
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
      <MenuItem onClick={handleUpdate}>Update</MenuItem>
      <MenuItem onClick={handleDelete}>Delete</MenuItem>
      </Menu>
    </div>
  );
}

export default ItemActions