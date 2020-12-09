import {FETCH_FOOD} from './types'

export const findFood = (input)  => async dispatch => {

  console.log('what is the input you are getting?', input.value)

  let path = `https://api.spoonacular.com/food/products/search?query=${input.value}&number=10&apiKey=${SPOON_API_KEY}`

  try {
    let res = await fetch(path, {
      method: 'GET',
      header: {

      }
    })
    let result = await res.json()
      dispatch({ 
          type: FETCH_FOOD,
          payload: {
            
            searchResults: [...result]
  
          }
       })
  }
  catch(e) {
    return 'what is the error ', {e}
  }
}

export const resetFoodSearch = () => {
  return {
    type: RESET_FOOD_SEARCH,
  }
}