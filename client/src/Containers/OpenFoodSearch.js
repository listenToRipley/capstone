import {connect} from 'react-redux'
import OpenFoodSearch from '../Components/OpenFoodSearch'
import {openFoodFinder} from '../redux/actions/openFoodFinder'

const mapStateToProps = (state) => {
  return {
    openFoodSearch: state.openFoodSearch
  }
}

 const mapStateToDispatch = (dispatch) => {
  return {
    openFoodFinder: (boo) => dispatch(openFoodFinder(boo))
  }
 }

 export default connect(mapStateToProps, mapStateToDispatch)(OpenFoodSearch)