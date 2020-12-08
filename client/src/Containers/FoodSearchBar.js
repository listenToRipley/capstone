//search bar, results should create the food list 
import {connect} from 'react-redux'
import FoodSearchBar from '../Components/FoodSearchBar'

const mapStateToProps = state => {
  return {
    foodSearchList: state.foodSearchList
  }
}

const mapStateToDispatch = (dispatch) => {
  return {
    
  }
}