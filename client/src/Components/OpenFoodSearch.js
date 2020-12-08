import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import { library, dom } from '@fortawesome/fontawesome-svg-core';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';

library.add(faPlusCircle) 
dom.watch()

const OpenFoodSearch = (props) => {

  console.log('looking at Open Food Search > ', props)

  return(
    <Tooltip className="add" title="Add Item to your shopping list">
      <IconButton aria-label="add item to shopping list"
      onClick={() => props.openFoodSearch(true)}>
        <svg className="fas fa-plus-circle"></svg>
      </IconButton>
    </Tooltip> 
  )
 
}

export default OpenFoodSearch