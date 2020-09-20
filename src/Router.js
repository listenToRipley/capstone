import React, { Component } from 'react';
import {Switch, Route} from 'react-router';
import Home from './components/Home';
import Shoppinglist from './components/ShoppingList';
import Pantry from './components/Pantry';
import FriendsList from './components/FriendsList';
import UserProfile from './components/UserProfile'
import cookie from 'cookie'

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
  return(
    <Switch>
      <Route  exact path='/' component={LogIn}/>
      <Route path='/home' component={Home}/>
      <Route path='/shoppingList' component={Shoppinglist}/>
      <Route path='/pantry' component={Pantry}/>
      <Route path='/friendsList' component={FriendsList}/>
      <Route path='/userProfile' component={UserProfile}/>
    </Switch>
  )
}

export default Router