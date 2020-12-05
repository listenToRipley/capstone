import {connect} from 'react-redux'
import NavBar from '../Components/NavBar'
import {userDetails} from '../redux/actions/userDetails'
import {logout} from '../redux/actions/logout'

const mapStateToProps = (state) => {
  console.log('why is the userInfo turning into a functions? ', state)
  return {
    user: state.user,
    userDetails: state.userDetails,
  }
}

const mapStateToDispatch = (dispatch) => {
  console.log('dispatch for nav')
  return {
    
    //this must be structured wrong since I am getting back the call
    userDetails: (username, token) => dispatch(userDetails(username,token))
  }
}

export default connect(mapStateToProps, mapStateToDispatch)(NavBar)