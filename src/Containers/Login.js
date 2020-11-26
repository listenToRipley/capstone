import {connect} from 'react-redux'
import '../Components/LogIn'
import LogIn from '../Components/LogIn'

const mapStateToProps = (state) => {
  return {
    loggedIn: state.user
  }
}

export default connect(mapStateToProps)(LogIn)