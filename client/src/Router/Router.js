import React from 'react';
import {Switch, Route} from 'react-router';
import LogIn from '../Containers/Login'
import Home from '../Containers/Home';
import ShoppingList from '../Containers/ShoppingList';
import CreateUser from '../Containers/CreateUser';
import About from '../Components/About'
import Pantry from '../Containers/Pantry';
import UserProfile from '../Components/UserProfile';
import Maintenance from '../Components/Maintenance'; 
import cookie from 'cookie';

const checkAuth = () => {
 
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

const Router = () => {

  return(
    <Switch>
    

      <Route path="/home" component={Home}/>
      <Route path="/shoppingList" component={ShoppingList}/>
      <Route path="/pantry" component={Pantry}/>
      <Route path="/profile" component={UserProfile}/>

      <Route path="/" component={Maintenance}/>
      {/* <Route exact path="/" component={LogIn}/> */}
      <Route path="/createNewUser" component={CreateUser}/>
      <Route path="/about" component={About}/>

    </Switch>
  )
}

export default Router
