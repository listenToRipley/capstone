import React from 'react';
import Button from '@material-ui/core/Button'
import { library, dom } from '@fortawesome/fontawesome-svg-core';
import { faCartArrowDown } from '@fortawesome/free-solid-svg-icons';

library.add(faCartArrowDown) 
dom.watch()

const AddToShoppingList = () => {
  return (
    <Button
    fullWidth="true"
    className="actions"
    ><svg className="fas fa-cart-arrow-down"/> 
    Add To Shopping List 
    <svg className="fas fa-cart-arrow-down"/>
    </Button>
  )
}

export default AddToShoppingList