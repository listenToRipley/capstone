import {connect} from 'react-redux';
import Food from '../Components/Food/Food';

const mapStateToProps = (state) => {
  return {
    searchResults: state.searchResults,
    openFoodFinder: state.openFoodFinder
  }
}



export default connect(mapStateToProps)(Food)