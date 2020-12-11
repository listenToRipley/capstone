import {connect} from 'react-redux'
import DeleteShopItem from '../Components/DeleteShopItem'
import {removeShopItem} from '../redux/actions/deleteShopItem'

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}

const mapStateToDispatch = (dispatch) => {
  return {
    removeShopItem: (user,pass, itemId) => dispatch(removeShopItem(user,pass, itemId))
  }
}

export default connect(mapStateToProps, mapStateToDispatch)(DeleteShopItem)