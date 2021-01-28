import {connect} from 'react-redux';
import CreateUser from '../Components/AppFunc/CreateUser';

const mapStateToProps = (state, CreateUser) => {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps)(CreateUser)