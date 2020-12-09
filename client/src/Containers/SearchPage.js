//search bar, results should create the food list 
import {connect} from 'react-redux'
import SearchPage from '../Components/SearchPage'
import {openFoodSearch} from '../redux/actions/openFoodFinder'

const mapStateToProps = (state) => {
  return {
    openFoodFinder: state.openFoodFinder,
    searchResults: state.searchResults,
  }
}

 const mapStateToDispatch = (dispatch) => {
  return {
    openFoodSearch: (boo) => dispatch(openFoodSearch(boo))
  }
 }

export default connect(mapStateToProps, mapStateToDispatch)(SearchPage)