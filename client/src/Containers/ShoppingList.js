import {connect} from 'react-redux'
import ShoppingList from '../Components/ShoppingList'
import {findShopList} from '../redux/actions/userShopList'

const mapStateToProps = (state) => {
  return {
    user:state.user,
    userDetails: state.userDetails,
    userShopList: state.userShopList,
    openFoodSearch: state.openFoodSearch,
    searchResults: state.searchResults
  }
}

 const mapStateToDispatch = (dispatch) => {

  return {
    findShopList: (listId, pass, username) => dispatch(findShopList(listId, pass, username))
  }
 }

 export default connect(mapStateToProps, mapStateToDispatch)(ShoppingList)