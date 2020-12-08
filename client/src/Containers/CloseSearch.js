import {connect} from 'react-redux';
import CloseFoodSearch from '../Components/CloseSearch'
import resetSearch from '../redux/actions/resetSearch'

const mapStateToDispatch = (dispatch) => {
  
  return {
    resetSearch: (boo) => dispatch(resetSearch(boo))
  }
}

export default connect(null, mapDispatchToProps)(CloseFoodSearch)