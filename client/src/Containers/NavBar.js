import {connect} from 'react-redux'
import NavBar from '../Components/AppFunc/NavBar'

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}

const mapStateToDispatch = (dispatch) => {

}

export default connect(mapStateToProps, mapStateToDispatch)(NavBar)