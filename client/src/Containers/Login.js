import {connect} from 'react-redux'
import Login from '../Components/LogIn'
import {login}from '../redux/actions/login'

const mapStateToProps = (user) => {
  return {
    loggedin: user
  }
}

const mapStateToDispatch = (dispatch) => {
  console.log('hit this?')
  return {
    login: (username, password) => dispatch(login(username, password))
  }
}

export default connect(mapStateToProps, mapStateToDispatch)(Login)