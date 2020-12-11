import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import Tooltip from '@material-ui/core/Tooltip'; 

const DeleteShopListItem = (props) => {

  const {entryId} = props

  const handleDeleteItem = () => {
    // console.log('delete this item!', entryId)
    props.removeShopItem(entryId)
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

export default DeleteShopListItem 