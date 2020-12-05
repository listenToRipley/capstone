import {connect} from 'react-redux';
import ShoppingList from '../Components/ShopList/ShoppingList';
import { getDetails } from '../redux/actions/userDetails';
import {getShopList} from '../redux/actions/userShopList'

const mapStateToProps = (state, ShoppingList) => {
  return {
    list: state.shoppingList
  }
}

const mapStateToDispatch = (dispatch) => {
  console.log('hitting the dispatch on shop list')
  return {
    getShopList: (listId) => dispatch(getDetails(listId))
  }
}

export default connect(mapStateToProps)(ShoppingList)