import React from 'react';
import './App.css';
import Router from './Router';
import {BrowserRouter} from 'react-router-dom';
import NavBar from './Components/NavBar';
// import {Provider } from 'react-redux'; 
// import store from './redux/store';

const App = () => {

  return(
    
    <BrowserRouter>
      <NavBar/>
        <Router/>
    </BrowserRouter>

  )

}

export default App;
