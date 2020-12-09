import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';

const DeleteShopListItem = (props) => {
  console.log('see the props for delete ', props)

  const handleDeleteItem = () => {
    console.log('delete this item!', props.action)
  }

  return (
    <IconButton
    onClick={handleDeleteItem}
    aria-label='delete'
    aria-controls='delete-business'
    aria-haspopup='false' >
      <DeleteForeverIcon />
    </IconButton>
  )
}

export default DeleteShopListItem 