import {connect} from 'react-redux'
import OpenFoodSearch from '../Components/OpenFoodSearch'
import {openFoodSearch} from '../redux/actions/openFoodFinder'

const mapStateToProps = (state) => {
  return {
    openFoodFinder: state.openFoodFinder
  }
}

 const mapStateToDispatch = (dispatch) => {
  return {
    openFoodSearch: (boo) => dispatch(openFoodSearch(boo))
  }
 }

 export default connect(mapStateToProps, mapStateToDispatch)(OpenFoodSearch)