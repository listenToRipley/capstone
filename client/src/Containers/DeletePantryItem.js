import {connect} from 'react-redux'
import DeletePantryItem from '../Components/DeletePantryItem'
import {removePantryItem} from '../redux/actions/deletePantryItem'

const mapStateToDispatch = (dispatch) => {
  return {
    removePantryItem: (entryId) => dispatch(removePantryItem(entryId))
  }
}

export default connect(null, mapStateToDispatch)(DeletePantryItem)