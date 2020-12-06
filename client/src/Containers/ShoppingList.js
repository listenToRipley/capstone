import {connect} from 'react-redux';
import ShoppingList from '../Components/ShoppingList';
import {findShopList} from '../redux/actions/userShopList'

const mapStateToProps = (state) => {
  console.log('STATE shopping list', state)
  return {
    user: state.user,
    userDetails: state.userDetails,
    shopList: state.shoppingList
  }
}

const mapStateToDispatch = (dispatch) => {
  console.log('hitting the dispatch on shop list')
  return {
    findShopList: (listId) => dispatch(findShopList(listId))
  }
}

export default connect(mapStateToProps, mapStateToProps)(ShoppingList)