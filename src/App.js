import React from 'react';
import {BrowserRouter as Router, Route, NavLink } from 'react-router-dom';

import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';

import "bootstrap/dist/css/bootstrap.min.css";

const App = () => (
  <div className='app'>
    <Navigation />
  </div>
);

const Navigation = () => (
  <Router>
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
          <NavLink className="navbar-brand" to={"/"}>Hidden brand</NavLink>
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link" activeClassName="nav-link active" exact={true} to={"/"}>Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" activeClassName="nav-link active" to={"/about"}>About</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" activeClassName="nav-link active" to={"/contact"}>Contact</NavLink>
            </li>
          </ul>
        </div>
      </nav>

      <hr />

      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
    </div>
  </Router>
 );

export default App;
