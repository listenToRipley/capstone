//search bar, results should create the food list 
import {connect} from 'react-redux'
import FoodSearchBar from '../Components/FoodSearchBar'
import {findFood} from '../redux/actions/findFood'

const mapStateToProps = state => {
  return {
    foodSearchList: state.foodSearchList
  }
}

const mapStateToDispatch = (dispatch) => {
  console.log('what is the input you get for the search? ', dispatch)
  return {
    findFood: (input) => dispatch(findFood(input))
  }
}

export default connect (mapStateToProps, mapStateToDispatch)(FoodSearchBar)