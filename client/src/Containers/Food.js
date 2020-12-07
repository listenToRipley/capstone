import {connect} from 'react-redux';
import Food from '../Components/Food/Food';

const mapStateToProps = (state, Food) => {
  return {
    food: state
  }
}

//add items to shop list 

export default connect(mapStateToProps)(Food)