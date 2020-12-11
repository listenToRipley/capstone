import {connect} from 'react-redux';
import ShoppingList from '../Components/ShopList/ShoppingList';

const mapStateToProps = (state, ShoppingList) => {
  return {
    list: state.shoppingList
  }
}

export default connect(mapStateToProps)(ShoppingList)