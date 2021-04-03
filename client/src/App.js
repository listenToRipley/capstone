import React, {Fragment} from 'react';
import './App.css';
import CssBaseline from '@material-ui/core/CssBaseline';
import Router from './Router/Router';
import {BrowserRouter} from 'react-router-dom';
import NavBar from './Containers/NavBar';
import {Provider } from 'react-redux'; 
import store from './redux/store';
window.React2 = require('react');

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
