import {connect} from 'react-redux'
import Home from '../Components/Home'
import {userInfo} from '../redux/actions/types'

const mapStateToProps = (userInfo) => {
  return {
    userInfo: userInfo
  }
}

const mapStateToDispatch = (dispatch) => {
  console.log('hit my dispatcher')
  return {
    userInfo: (user) => dispatch(login(user))
  }
}

export default connect(mapStateToProps, mapStateToDispatch)(Home) 