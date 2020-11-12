import React from 'react';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import Services from './components/pages/Services';
import Products from './components/pages/Products';
import SignUp from './components/pages/SignUp';
import Profile from './components/pages/Profile';


function App() {
  return (
    <>
    <Router>
      <Navbar/>
      <Switch>
        <Route path ='/' exact component = {Home}/>
        <Route path ='/services' component = {Services} />
        <Route path ='/products' component = {Products} />
        <div className="App">
      <nav className="navbar navbar-expand-lg navbar-light fixed-top">
        <div className="container">
          
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav ml-auto">
            </ul>
          </div>
        </div>
      </nav>

      <div className="auth-wrapper">
        <div className="auth-inner">
         
           
            <Route path="/sign-up" component={SignUp} />
            <Route path="/profile" component={Profile} />
          
        </div>
      </div>
    </div>
       
      </Switch>
      </Router>
    </>
  );
}

export default App;
