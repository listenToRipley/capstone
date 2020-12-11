import {connect} from 'react-redux'
import FoodSearchBar from '../Components/FoodSearchBar'
import {findFood} from '../redux/actions/findFood'

const mapStateToProps = (state) => {
  return {
    searchResults: state.searchResults
  }
}

const mapStateToDispatch = (dispatch) => {
  return {
    findFood: (input) => dispatch(findFood(input))
  }
}

export default connect(mapStateToProps, mapStateToDispatch)(FoodSearchBar)