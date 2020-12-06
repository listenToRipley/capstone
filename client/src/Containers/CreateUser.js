import {connect} from 'react-redux';
import CreateUser from '../Components/CreateUser';
import {createNewUser} from '../redux/actions/createNewUser'

const mapStateToProps = (state) => {
  return {
    user: state.newUser
  }
}

const mapDispatchToProps = (dispatch) => {
  console.log('you ready to dispatch in create user?')
  return {
    createNewUser: (username, firstName, lastName, email, password, dobMonth, dobDay, dobYear) => dispatchEvent(createNewUser(username, firstName, lastName, email, password, dobMonth, dobDay, dobYear))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateUser)