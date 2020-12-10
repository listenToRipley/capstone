import {connect} from 'react-redux'
import DeleteShopItem from '../Components/DeleteShopItem'
import {removeShopItem} from '../redux/actions/deleteShopItem'

const mapStateToDispatch = (dispatch) => {
  return {
    removeShopItem: (entryId) => dispatch(removeShopItem(entryId))
  }
}

export default connect(null, mapStateToDispatch)(DeleteShopItem)