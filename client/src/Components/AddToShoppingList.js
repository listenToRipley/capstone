import React from 'react';
import Button from '@material-ui/core/Button'
import { library, dom } from '@fortawesome/fontawesome-svg-core';
import { faCartArrowDown } from '@fortawesome/free-solid-svg-icons';

library.add(faCartArrowDown) 
dom.watch()

const AddToShoppingList = (props) => {

  console.log('props on add item', props)
  const {pass} = props.user
  const {username} = props.user
  const {shopListId} = props.userDetails
  const {item} = props
  const {quantity} = props
  const {itemId} = props

  console.log('username', username)
  console.log('token : ', pass)
  console.log('list id : , ', shopListId)
  console.log('quantity, ', quantity.value)
  console.log('items, ', item.value)
  console.log('item id : ', itemId)

  const handleSubmit = (e) => {
    e.preventDefault()
    
    props.addToShopList(username,pass, shopListId, (quantity.value<1 ? 1 : quantity.value), item.value, (itemId!==0? itemId: null))
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