import {connect} from 'react-redux';
import AddToShoppingList from '../Components/AddToShoppingList';
import {addToShopList} from '../redux/actions/addToShopList'

const mapStateToProps = (state) => {
  return {
    user:state.user,
    userDetails: state.userDetails,
    userShopList: state.userShopList,
    searchResults: state.searchResults
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addToShopList: (user,pass,listId, quantity, item, itemId) => dispatch(addToShopList(user,pass, listId, quantity, item, itemId))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddToShoppingList)