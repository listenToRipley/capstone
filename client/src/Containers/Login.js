import {connect} from 'react-redux'
import Login from '../Components/LogIn'
import {login}from '../redux/actions/login'

const mapStateToProps = (state) => {
  
  return {
    user: state.user,
    userInfo: state.userInfo,
    openDrawer: state.openDrawer
  }
}

const mapStateToDispatch = (dispatch) => {
  return {
    login: (username, password) => dispatch(login(username, password)),
  }
}

export default connect(mapStateToProps, mapStateToDispatch)(Login) 