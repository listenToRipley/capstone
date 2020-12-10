import {connect} from 'react-redux'
import DeleteShopItem from '../Components/DeleteShopItem'
import {removeShopItem} from '../redux/actions/deleteShopItem'

const mapStateToProps = (state) => {
  return {
    userShopList: state.userShopList
  }
}

const mapStateToDispatch = (dispatch) => {
  return {
    removeShopItem: (entryId) => dispatch(removeShopItem(entryId))
  }
}

export default connect(mapStateToProps, mapStateToDispatch)(DeleteShopItem)