import {connect} from 'react-redux'
import NavBar from '../Components/AppFunc/NavBar'
import {userDetails} from '../redux/actions/userDetails'
import state from '../redux/state'

const mapStateToProps = (state) => {
  console.log('why is the userInfo turning into a functions? ', state)
  return {
    user: state.user,
    userInfo: state.userDetails
  }
}

const mapStateToDispatch = (dispatch) => {
  console.log('dispatch for nav')
  return {
    userDetails: (intake, username) => dispatch(userDetails(intake, username))
  }
}

export default connect(mapStateToProps, mapStateToDispatch)(NavBar)