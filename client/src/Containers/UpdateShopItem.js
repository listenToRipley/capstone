import {connect} from 'react-redux'
import UpdateShopItem from '../Components/UpdateShopItem'
import {upShopItem } from '../redux/actions/updateShopItem'

const mapStateToDispatch = (dispatch) => {
  return {
    upShopItem : (entryId) => dispatch(upShopItem(entryId))
  }
}

export default connect(null, mapStateToDispatch)(UpdateShopItem)