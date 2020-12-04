// import {connect} from 'react-redux'
// import NavBar from '../Components/AppFunc/NavBar'
// import {userDetails} from '../redux/actions/userDetails'
// import {logout} from '../redux/actions/logout'
// import state from '../redux/state'

// const mapStateToProps = (state) => {
//   console.log('why is the userInfo turning into a functions? ', state)
//   return {
//     user: state.user,
//     userInfo: state.userDetails,
//     logout: state
//   }
// }

// const mapStateToDispatch = (dispatch) => {
//   console.log('dispatch for nav')
//   return {
//     
//     //this must be structured wrong since I am getting back the call
//     logout: (boo) => dispatch(logout(boo))
//   }
// }

// export default connect(mapStateToProps, mapStateToDispatch)(NavBar)