import {OPEN_FOOD_FINDER} from './types'

export const openFoodSearch = (boo) => {
  return {
    type: OPEN_FOOD_FINDER,
    payload: {
      openFoodFinder: boo
    }
  }
}