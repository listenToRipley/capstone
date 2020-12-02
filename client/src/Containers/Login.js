import {connect} from 'react-redux'
import Login from '../Components/LogIn'
import {login}from '../redux/actions/login'

const mapStateToProps = (state) => {
  return {
    state: state.user
  }
}

const mapStateToDispatch = (dispatch) => {
  return {
    login: (username, password) => dispatch(login(username, password))
  }
}

export default connect(mapStateToProps, mapStateToDispatch)(Login) 