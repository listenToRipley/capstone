import {connect} from 'react-redux';
import Merge from '../Components/PalLists/MergeRequest';

const mapStateToProps = (state, Merge) => {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps)(Merge)