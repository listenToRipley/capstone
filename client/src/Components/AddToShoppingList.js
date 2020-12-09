import React from 'react';
import Button from '@material-ui/core/Button'
import { library, dom } from '@fortawesome/fontawesome-svg-core';
import { faCartArrowDown } from '@fortawesome/free-solid-svg-icons';

library.add(faCartArrowDown) 
dom.watch()

const AddToShoppingList = (props) => {

  console.log('props on add item', props)
  const {pass} = props.user
  const {listId} = props.userDetails

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('you want to add to shopping list', pass, listId, quantity, measurement, item , itemId)
    addToShopList(pass.token, listId, (quantity<1 ? 1 : quantity), null, item, (itemId? itemId: null))
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