import {connect} from 'react-redux'
import NavBar from '../Components/NavBar'
import {getDetails} from '../redux/actions/userDetails'
import {logout} from '../redux/actions/logout'

const mapStateToProps = (state) => {
  return {
    user: state.user,
    userDetails: state.userDetails,
  }
}

const mapStateToDispatch = (dispatch) => {
  console.log('dispatch for nav')
  return {
    getDetails: (intake, user) => dispatch(getDetails(intake, user))
  }
}

export default connect(mapStateToProps, mapStateToDispatch)(NavBar)