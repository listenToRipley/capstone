import {connect} from 'react-redux'
import Login from '../Components/LogIn'

const mapStateToProps = (state, LogIn) => {
  return {
    logIn: state.logIn
  }
}

export default connect(mapStateToProps)(Login)