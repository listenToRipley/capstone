import React from 'react';
import Button from '@material-ui/core/Button'
import { library, dom } from '@fortawesome/fontawesome-svg-core';
import { faCartArrowDown } from '@fortawesome/free-solid-svg-icons';

library.add(faCartArrowDown) 
dom.watch()

const AddToShoppingList = (props) => {

  console.log('props on add item', props)

  const handleSubmit = () => {
    console.log('you want to add to shopping list')
  }

  return (
    <Button
    onClick={handleSubmit}
    ><svg className="fas fa-cart-arrow-down"/> 
    Add To Shopping List 
    <svg className="fas fa-cart-arrow-down"/>
    </Button>
  )
}

export default AddToShoppingList