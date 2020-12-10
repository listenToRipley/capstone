import React from 'react';
import {Switch, Route ,browserHistory} from 'react-router';
import LogIn from '../Containers/Login'
import Home from '../Containers/Home';
import ShoppingList from '../Containers/ShoppingList';
import CreateUser from '../Containers/CreateUser';
import About from '../Components/About'
import Pantry from '../Containers/Pantry';

import cookie from 'cookie'

//futureStateItems
// import Inbox from '../Components/CurrentUser/Inbox/Inbox'
// import ForgotPassword from '../Components/AppFunc/ForgotPassword'

// import PalList from '../Components/PalLists/PalsList';
// import UserProfile from '../Components/CurrentUser/UserProfile/Main';
// import PalProfile from '../Components/PalProfile/PalProfile'


// console.log(cookie)
//this will be for when you move to login required status
const checkAuth = () => {
  // associate with token created during login? 
  const cookies = cookie.parse(document.cookie)
  const status = JSON.parse(cookies.logCookies).validation
  if (status) {
    console.log('what is the status?')
  } else {
    console.log('denied')
  }
}

const ProtectedRoute = ({component: Component, ...rest}) => {
  return (
      <Route
          {...rest}
          render={(props) => checkAuth() ? <Component {...props}/> : <Redirect to={{pathname:'/'}}/> }
      />
  )
}


//would like everything but the login to be protected routes, the route can be protected through the user name, if I can pass it correctly 
const Router = () => {

  return(
    <Switch>

      <Route path="/home" component={Home}/>
      <Route path="/shoppingList" component={ShoppingList}/>
      <Route path="/pantry" component={Pantry}/>
{/* un protected routes */}
      <Route exact path="/" component={LogIn}/>
      <Route path="/createNewUser" component={CreateUser}/>
      <Route path="/about" component={About}/>

    </Switch>
  )
}

export default Router

//futureStateRoutes
// <Route path="/forgotpassword" component={ForgotPassword}/>
// <Route path="/palProfile" component={PalProfile}/>
// <Route path="/inbox" component={Inbox}/>
// <Route path="/palsList" component={PalList}/>
// <Route path="/userProfile" component={UserProfile}/>