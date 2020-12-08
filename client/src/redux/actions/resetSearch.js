import {RESET_FOOD_SEARCH} from './types'

export const resetSearch = (boo) => {
  
  return {
    type: RESET_FOOD_SEARCH,
    payload: {
      openFoodSearch: boo,
      searchResults: []
    }
  }
}