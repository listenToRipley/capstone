import {FETCH_FOOD} from './types'

export const findFood = (searchItem)  => async dispatch => {
  let path = `https://api.spoonacular.com/food/products/search?apiKey=${SPOON_API_KEY}query=${searchItem}`

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
            searchFood: [...result]
          }
       })
  }
  catch(e) {
    return 'what is the error ', {e}
  }
}

export const resetFood = () => {
  return {
    type: RESET_FOOD_SEARCH,
    payload: {
      searchFood: []
    }
  }
}