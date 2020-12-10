import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';

const DeletePantryItem = (props) => {

  const {entryId} = props

  const handleDeleteItem = () => {
    // console.log('delete this item!', entryId)
    props.removePantryItem(entryId)
  }

  return (
    <IconButton
    onClick={handleDeleteItem}
    aria-label='delete'
    aria-controls='delete-item'
    aria-haspopup='false' >
      <DeleteForeverIcon />
    </IconButton>
  )
}

export default DeletePantryItem 