import {FIND_FOOD} from './types'

export const findFood = (input)  => async dispatch => {

  console.log('what is the input you are getting?', input)

  let path = `https://api.spoonacular.com/food/products/search?query=${input}&number=10&apiKey=${SPOON_API_KEY}`

  try {
    let res = await fetch(path, {
      method: 'GET',
      header: {

      }
    })
    let result = await res.json()
    console.log('the results is :', result)
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
