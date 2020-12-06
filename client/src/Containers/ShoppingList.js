import {connect} from 'react-redux'
import ShoppingList from '../Components/ShoppingList'
import {findShopList} from '../redux/actions/userShopList'

const mapStateToProps = (state) => {
  return {
    user:state.user,
    userDetails: state.userDetails,
    userShopList: state.userShopList
  }
}

 const mapStateToDispatch = (dispatch) => {

  return {
    findShopList: (listId) => dispatch(findShopList(listId))
  }
 }

 export default connect(mapStateToProps, mapStateToDispatch)(ShoppingList)