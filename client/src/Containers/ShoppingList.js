import {connect} from 'react-redux';
import ShoppingList from '../Components/ShoppingList';
import {getShopList} from '../redux/actions/userShopList'

const mapStateToProps = (state) => {
  return {
    user: state.user,
    userDetails: state.userDetails,
    shopList: state.shoppingList
  }
}

const mapStateToDispatch = (dispatch) => {
  console.log('hitting the dispatch on shop list')
  return {
    getShopList: (listId) => dispatch(getShopList(listId))
  }
}

export default connect(mapStateToProps, mapStateToProps)(ShoppingList)