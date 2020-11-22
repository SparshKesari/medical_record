import React from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Login from './Component/Login'
import { Container, Col, Row } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import Signup from './Component/Signup';
import Landing_Page from './Pages/Landing_Page';
import NavBar from './Component/Navigation';
import Api from './Component/Api'

function App() {
  return (
      <>
        <NavBar/>
        <Switch>
            <Route exact path='/' component={Landing_Page}></Route>
            <Route exact path='/login' component={Login}></Route>
            <Route path='/signup' component={Signup} ></Route>
            <Route path='/api' component={Api} ></Route>
        </Switch>
      </>
  );
}

export default App;
