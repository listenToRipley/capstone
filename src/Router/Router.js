import React from 'react';
import {Switch, Route} from 'react-router';
import LogIn from '../Components/LogIn'
import Home from '../Components/Home';
import ShoppingList from '../Components/ShoppingList';
import Pantry from '../Components/Pantry';
import PalList from '../Components/PalList';
import UserProfile from '../Components/UserProfile';
import PalProfile from '../Components/PalProfile'
import SignUp from '../Components/SignUp';
import About from '../Components/About'
import ForgotPassword from '../Components/ForgotPassword'
// import cookie from 'cookie'

//this will be for when you move to login required status
// const checkAuth = () => {
//   const cookies = cookies.parse(document.cookie)
//   const status = JSON.parse(cookies."cookie object name here"). "element related to login"
// }

// const ProtectedRoute = ({component: Component, ...rest}) => {
//   return (
//       <Route
//           {...rest}
//           render={(props) => checkAuth() ? <Component {...props}/> : <Redirect to={{pathname:'/'}}/> }
//       />
//   )
// }


//would like everything but the login to be protected routes, the route can be protected through the user name, if I can pass it correctly 
const Router = () => {
  console.log('go you see this on change?')
  return(
    <Switch>
      <Route  exact path="/" component={LogIn}/>
      <Route path="/home" component={Home}/>
      <Route path="/shoppingList" component={ShoppingList}/>
      <Route path="/pantry" component={Pantry}/>
      <Route path="/palsList" component={PalList}/>
      <Route path="/userProfile" component={UserProfile}/>
      <Route path="/palProfile" component={PalProfile}/>
      <Route path="/createNewUser" component={SignUp}/>
      <Route path="/about" component={About}/>
      <Route path="/forgotpassword" component={ForgotPassword}/>
    </Switch>
  )
}

export default Router