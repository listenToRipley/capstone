import {connect} from 'react-redux'
import UpdateShopItem from '../Components/UpdateShopItem'
import {upShopItem } from '../redux/actions/updateShopItem'

const mapStateToProps = (state) => {
  return {
    userShop  : state.userShopList
  }
}

const mapStateToDispatch = (dispatch) => {
  return {
    upShopItem : (entryId) => dispatch(upShopItem(entryId))
  }
}

export default connect(mapStateToProps, mapStateToDispatch)(UpdateShopItem)