import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import UpdateIcon from '@material-ui/icons/Update';

const UpdateShopItem = (props) => {
  console.log('see the props for update ', props)

  const handleUpdateItem = () => {
    console.log('update this item!', props.action)
  }

  return (
    <IconButton
    onClick={handleUpdateItem}
    aria-label='update'
    aria-controls='update-item'
    aria-haspopup='false' >
      <UpdateIcon />
    </IconButton>
  )
}

export default UpdateShopItem 