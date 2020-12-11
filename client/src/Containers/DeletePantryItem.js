import {connect} from 'react-redux'
import DeletePantryItem from '../Components/DeletePantryItem'
import {removePantryItem} from '../redux/actions/deletePantryItem'

const mapStateToProps = (state) => {
  return {
    user:state.user
  }
}

const mapStateToDispatch = (dispatch) => {
  return {
    removePantryItem: (user,pass, itemId) => dispatch(removePantryItem(user,pass, itemId))
  }
}

export default connect(null, mapStateToDispatch)(DeletePantryItem)