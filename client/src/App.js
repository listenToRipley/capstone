import React, {Fragment} from 'react';
import './App.css';
import CssBaseline from '@material-ui/core/CssBaseline';
import Router from './Router/Router';
import {BrowserRouter} from 'react-router-dom';
import NavBar from './Components/AppFunc/NavBar';
import {Provider } from 'react-redux'; 
import store from './redux/store';

const App = () => {

  return(
    
    <Provider store={store}>
      <CssBaseline>
         <BrowserRouter>
         <NavBar/>
           <Router/>
        </BrowserRouter>
      </CssBaseline>
    </Provider>

  )

}

export default App;
