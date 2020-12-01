import {connect} from 'react-redux'
import NavBar from '../Components/AppFunc/NavBar'

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.user.validation
  }
}

export default connect(mapStateToProps)(NavBar)