import {connect} from 'react-redux';
import PalList from '../Components/PalLists/PalsList';

const mapStateToProps = (state, PalList) => {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps)(PalList)