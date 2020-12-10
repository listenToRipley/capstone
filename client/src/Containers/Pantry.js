import {connect} from 'react-redux'
import Pantry from '../Components/Pantry'
import {findPantry} from '../redux/actions/userPantry'

const mapStateToProps = (state) => {
  return {
    user:state.user,
    userDetails: state.userDetails,
    userPantryList: state.userPantryList,
    openFoodFinder: state.openFoodFinder,
    searchResults: state.searchResults
  }
}

 const mapStateToDispatch = (dispatch) => {

  return {
    findPantry: (listId, pass, username) => dispatch(findPantry(listId, pass, username))
  }
 }

 export default connect(mapStateToProps, mapStateToDispatch)(Pantry)