import {connect} from 'react-redux'
import NavBar from '../Components/NavBar'
import {getDetails} from '../redux/actions/userDetails'

const mapStateToProps = (state) => {
  return {
    user: state.user,
    userDetails: state.userDetails,
    openDrawer: state.openDrawer
  }
}

const mapStateToDispatch = (dispatch) => {

  return {
    getDetails: (intake, user) => dispatch(getDetails(intake, user))
  }
}


export default connect(mapStateToProps, mapStateToDispatch)(NavBar)