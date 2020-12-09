import {connect} from 'react-redux'
import Logout from '../Components/Logout'
import {deleteShopItem} from '../redux/actions/logout'

const mapStateToProps = (state) => {
  return {
    state: state
  }
}

const mapStateToDispatch = (dispatch) => {
  return {
    logout: (b00) => dispatch(logout(b00))
  }
}

export default connect(mapStateToProps, mapStateToDispatch)(Logout)