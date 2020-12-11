import {connect} from 'react-redux'
import UpdatePantryItem from '../Components/UpdatePantryItem'
import { upPantryItem } from '../redux/actions/updatePantryItem'

const mapStateToDispatch = (dispatch) => {
  return {
    upPantryItem : (entryId) => dispatch(upPantryItem(entryId))
  }
}

export default connect(null, mapStateToDispatch)(UpdatePantryItem)