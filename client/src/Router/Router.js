import React from 'react';
import {Switch, Route} from 'react-router';
import LogIn from '../Containers/Login'
import Home from '../Components/Home';
import ShoppingList from '../Components/ShopList/ShoppingList';
import Pantry from '../Components/Pantry/Pantry';
import PalList from '../Components/PalLists/PalsList';
import UserProfile from '../Components/CurrentUser/UserProfile/Main';
import PalProfile from '../Components/PalProfile/PalProfile'
import CreateUser from '../Components/AppFunc/CreateUser';
import About from '../Components/About'
import Inbox from '../Components/CurrentUser/Inbox/Inbox'
import Food from '../Components/Food/Food'
import ForgotPassword from '../Components/AppFunc/ForgotPassword'
// import cookie from 'cookie'

//this will be for when you move to login required status
// const checkAuth = () => {
//   // associate with token created during login? 
//   const cookies = cookies.parse(document.cookie)
//   // const status = JSON.parse(cookies."cookie object name here"). "element related to login"
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
      <Route path="/inbox" component={Inbox}/>
      <Route path='/food' component={Food}/>
      
{/* un protected routes */}
      <Route path="/createNewUser" component={CreateUser}/>
      <Route path="/about" component={About}/>
      <Route path="/forgotpassword" component={ForgotPassword}/>
    </Switch>
  )
}

export default Router