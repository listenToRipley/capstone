import {connect} from 'react-redux';
import Pantry from '../Components/Pantry/Pantry';

const mapStateToProps = (state, Pantry) => {
  return {
    list: state.pantry
  }
}

export default connect(mapStateToProps)(Pantry)