import {connect} from 'react-redux';
import CreateUser from '../Components/AppFunc/CreateUser';

const mapStateToProps = (state, CreateUser) => {
  return {
    user: state.newUser
  }
}

const mapDispatchToProps = (dipatch) => {
  return {
    createNewUser: (username, firstName, lastName, email, password, dobMonth, dobDay, dobYear) => dispatchEvent(createNewUser(username, firstName, lastName, email, password, dobMonth, dobDay, dobYear))
  }
}

export default connect(mapStateToProps)(CreateUser)