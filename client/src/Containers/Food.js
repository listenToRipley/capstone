import {connect} from 'react-redux';
import Food from '../Components/Food/Food';

const mapStateToProps = (state, Food) => {
  return {
    food: state
  }
}

export default connect(mapStateToProps)(Food)