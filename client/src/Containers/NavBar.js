import {connect} from 'react-redux'
import NavBar from '../Components/AppFunc/NavBar'
import {userInfo} from '../redux/actions/userDetails'

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}

const mapStateToDispatch = (dispatch) => {
  return {
    userInfo: (intake, username) => dispatch(userInfo(intake, username))
  }
}

export default connect(mapStateToProps, mapStateToDispatch)(NavBar)