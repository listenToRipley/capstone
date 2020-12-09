import {connect} from 'react-redux';
import Pantry from '../Components/Pantry/Pantry';

const mapStateToProps = (state, Pantry) => {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps)(Pantry)