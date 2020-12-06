import React from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Login from './Component/Login'
import { Container, Col, Row } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import Signup from './Component/Signup';
import Landing_Page from './Pages/Landing_Page';
import NavBar from './Component/Navigation';
import Api from './Component/Api'
import { useState } from 'react';
import fire from './fire.js';
import HomePage from './Pages/Home_Page';
import AddForm from './Component/AddForm';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
    fire.auth().onAuthStateChanged((user) => {
      return user ? setIsLoggedIn(true) : setIsLoggedIn(false);
  });
  
  console.log('logged in?', isLoggedIn);
  return (
    <>
      <NavBar/>
      <Switch>
          <Route exact path='/' component={Landing_Page}></Route>
          <Route exact path='/login' component={Login}></Route>
          <Route path='/signup' component={Signup} ></Route>
          <Route path='/home' component={HomePage} ></Route>
          <Route path='/add' component={AddForm} ></Route>
      </Switch>
    </>
);
}

export default App;