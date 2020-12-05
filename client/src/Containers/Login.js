import {connect} from 'react-redux'
import Login from '../Components/LogIn'
import {login}from '../redux/actions/login'

const mapStateToProps = (state) => {
  console.log('map your state', state)
  return {
    user: state.user,
    userInfo: state.userInfo
  }
}

const mapStateToDispatch = (dispatch) => {
  return {
    login: (username, password) => dispatch(login(username, password)),
  }
}

export default connect(mapStateToProps, mapStateToDispatch)(Login) 