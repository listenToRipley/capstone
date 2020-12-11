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

  return {
    createNewUser: (username, firstName, lastName, email, password, bMonth, bDay, bYear) => dispatch(createNewUser(username, firstName, lastName, email, password, bMonth, bDay, bYear))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateUser)