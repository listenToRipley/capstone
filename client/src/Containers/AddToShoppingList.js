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
  console.log('you ready to dispatch in create user?')
  return {
    addToShopList: (pass,listId, quantity, measurement, item, itemId) => dispatch(addToShopList(pass, listId, quantity, measurement, item, itemId))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddToShoppingList)