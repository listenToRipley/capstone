import React, {Fragment} from 'react';
import './App.css';
import CssBaseline from '@material-ui/core/CssBaseline';
import Router from './Router/Router';
import {BrowserRouter} from 'react-router-dom';
import NavBar from './Components/AppFunc/NavBar';
import {Provider } from 'react-redux'; 
import store from './redux/store';
import ReactDom from 'react-dom';
window.React2 = require('react');

console.log(window.React1 === window.React2);

const App = () => {

  return(

    <Provider store={store}>
      <CssBaseline>
         <BrowserRouter>
          {/* <NavBar /> */}
           <Router/>
        </BrowserRouter>
      </CssBaseline>
    </Provider>
  ) 

}

export default App;
