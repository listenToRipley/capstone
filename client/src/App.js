import React, {Fragment} from 'react';
import './App.css';
import CssBaseline from '@material-ui/core/CssBaseline';
import Router from './Router/Router';
import {BrowserRouter} from 'react-router-dom';
import NavBar from './Containers/NavBar';
import {Provider } from 'react-redux'; 
import store from './redux/store';
window.React2 = require('react');
// import ContentShifter from './Containers/ContentShifter'

// console.log(window.React1 === window.React2);

const App = () => {

  return(

    <Provider store={store}>
      <CssBaseline>
         <BrowserRouter>
         {/* <ContentShifter/> */}
          <NavBar />
            <Router/>
        </BrowserRouter>
      </CssBaseline>
    </Provider>
  ) 

}

export default App;
