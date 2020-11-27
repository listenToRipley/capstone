import {connect} from 'react-redux'
import LogIn from '../Components/LogIn'

const mapStateToProps = (state, LogIn) => {
  return {
    logIn: state.user
  }
}

export default connect(mapStateToProps)(LogIn)