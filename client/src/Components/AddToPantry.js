import React from 'react';
import Button from '@material-ui/core/Button'
import { library, dom } from '@fortawesome/fontawesome-svg-core';
import { faDoorOpen } from '@fortawesome/free-solid-svg-icons';

library.add(faDoorOpen) 
dom.watch()

const AddToPantry = (props) => {

  const {pass} = props.user
  const {username} = props.user
  const {pantryId} = props.userDetails
  const {item} = props
  const {quantity} = props
  const {itemId} = props

  const handleSubmit = (e) => {
    e.preventDefault()
    
    props.addToPantry(username,pass, pantryId, (quantity.value<1 ? 1 : quantity.value), item.value, (itemId!==0? itemId: null))
  }

  return (
    <Button
    onClick={handleSubmit}
    ><svg className="fas fa-door-open"/>  
        Add To Pantry
    <svg className="fas fa-door-open"/>
    </Button>
  )
}

export default AddToPantry