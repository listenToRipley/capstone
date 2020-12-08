import {connect} from 'react-redux'
import Home from '../Components/Home'

const mapStateToProps = (state) => {
  return {
    user: state.user,
    userDetails: state.userDetails
  }
}

export default connect(mapStateToProps)(Home) 