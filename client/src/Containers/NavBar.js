import {connect} from 'react-redux'
import NavBar from '../Components/AppFunc/NavBar'

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps)(NavBar)