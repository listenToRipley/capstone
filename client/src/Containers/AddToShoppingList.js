import {connect} from 'react-redux';
import AddToShoppingList from '../Components/AddToShoppingList';
// import {} from '../redux/actions/'

const mapStateToProps = (state) => {
  return {
    user: state.user,
    userDetails: state.userDetails
  }
}

const mapDispatchToProps = (dispatch) => {
  console.log('you ready to dispatch in create user?')
  return {
    addToShopList: (token,listId, quantity, item, measurement) => dispatch(addToShopList(token,listId, quantity, item, measurement))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateUser)