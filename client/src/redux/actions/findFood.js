import {FETCH_FOOD} from './types'

export const findFood = (searchItem) => {
  return (dispatch) => {
    //don't think the add of the api is quite right. 
    fetch(`https://api.spoonacular.com/food/products/search?apiKey=${SPOON_API_KEY}query=${searchItem}`)
      .then(req => req.json())
      .then(res => {
        dispatch({ //need to pull in the information, do I need to add the key here? 
       
            type: 'FETCH_FOOD',
            payload: res.Results
          
        })
      })
  }
}