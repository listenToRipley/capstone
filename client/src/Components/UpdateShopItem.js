import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import UpdateIcon from '@material-ui/icons/Update';

const UpdateShopItem = (props) => {
  const {action} = props

  const handleUpdateItem = () => {
    console.log('update this item!', props.action)
    props.upShopItem(action)
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