import {connect} from 'react-redux';
import AddToPantry from '../Components/AddToPantry';
import {addToPantry} from '../redux/actions/addToPantry'

const mapStateToProps = (state) => {
  return {
    user:state.user,
    userDetails: state.userDetails,
    userPantry: state.userPantry,
    searchResults: state.searchResults
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addToPantry: (user,pass,listId, quantity, item, itemId) => dispatch(addToPantry(user,pass, listId, quantity, item, itemId))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddToPantry)