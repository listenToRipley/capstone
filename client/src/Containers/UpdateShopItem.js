import {connect} from 'react-redux'
import UpdateShopItem from '../Components/UpdateShopItem'
import {upShopItem } from '../redux/actions/updateShopItem'

const mapStateToProps = (state) => {
  return {
    user: state.user,
    userShopList: state.userShopList
  }
}

const mapStateToDispatch = (dispatch) => {
  return {
    upShopItem : (user, pass, itemId, quantity, item) => dispatch(upShopItem(user, pass, itemId, quantity, item))
  }
}

export default connect(mapStateToProps, mapStateToDispatch)(UpdateShopItem)