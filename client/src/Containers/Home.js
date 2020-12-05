import {connect} from 'react-redux'
import Home from '../Components/Home'
import {userInfo} from '../redux/actions/types'

const mapStateToProps = (state) => {
  console.log('hello to home', state)
  return {
    user: state.user,
    userDetails: state.userDetails
  }
}

export default connect(mapStateToProps)(Home) 