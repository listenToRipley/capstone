import {connect} from 'react-redux';
import CreateUser from '../Components/CreateUser';
import {createNewUser} from '../redux/actions/createNewUser'

const mapStateToProps = (state) => {
  console.log(state, 'state in new user')
  return {
    newUser: state.newUser
  }
}

const mapDispatchToProps = (dispatch) => {
  console.log('you ready to dispatch in create user?')
  return {
    createNewUser: (username, firstName, lastName, email, password, birthday) => dispatch(createNewUser(username, firstName, lastName, email, password, birthday))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateUser)