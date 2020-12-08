import {OPEN_FOOD_FINDER} from './types'

export const openFoodFinder = (boo) => {
  return {
    type: OPEN_FOOD_FINDER,
    payload: {
      openFoodSearch: boo
    }
  }
}