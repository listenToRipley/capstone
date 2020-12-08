import {connect} from 'react-redux';
import Food from '../Components/Food/Food';

const mapStateToProps = (state) => {
  return {
    searchResults: state.searchResults,
    openFoodSearch: state.openFoodSearch
  }
}



export default connect(mapStateToProps)(Food)