import {FIND_FOOD} from './types'

const API_KEY = process.env.REACT_APP_SPOON_API_KEY;

export const findFood = (input)  => async dispatch => {

  let path = `https://api.spoonacular.com/food/products/search?query=${input}&number=10&apiKey=${API_KEY}`

  try {
    let res = await fetch(path, {
      method: 'GET',
      header: {
        Accept: "application/json", "Content-Type": "application/json"
      }
    })
    let result = await res.json()
    console.log('the results is :', result)
    let product = result.products 
    console.log('the product back is', product)
      dispatch({ 
          type: FIND_FOOD,
          payload: product
  
       })
  }
  catch(e) {
    return 'what is the error ', {e}
  }
}
