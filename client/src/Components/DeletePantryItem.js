import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import Tooltip from '@material-ui/core/Tooltip'

const DeletePantryItem = (props) => {

  const {entryId} = props
  const {username} = props.user
  const {token} = props.user.pass

  const handleDeleteItem = () => {
    // console.log('delete this item!', entryId)
    props.removePantryItem(username,pass, itemId)
  }

  return (
    <Tooltip title="delete item">
      <IconButton
        onClick={handleDeleteItem}
        aria-label='delete'
        aria-controls='delete-item'
        aria-haspopup='false' >
      <DeleteForeverIcon />
    </IconButton>
    </Tooltip>
  )
}

export default DeletePantryItem 