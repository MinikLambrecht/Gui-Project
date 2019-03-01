import React from 'react';
import {BrowserRouter as Router, Route, NavLink } from 'react-router-dom';


const Header = () => (
  <header>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#NavbarToggle" aria-controls="NavbarToggle" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="NavbarToggle">
        <NavLink className="navbar-brand" to="/">GDC</NavLink>
        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
          <li className="nav-item">
            <NavLink className="nav-link" exact={true} activeClassName="nav-link active" to="/">Home</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" activeClassName="nav-link active" to="/about">About</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" activeClassName="nav-link active" to="/contact">Contact</NavLink>
          </li>
        </ul>
        <form className="form-inline navbar-nav my-2 my-lg-0">
          <li className="nav-item">
            <NavLink className="nav-link" to="/register">Register</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/login">Login</NavLink>
          </li>
          <li className="nav-item">
            <button>Log Out</button>
          </li>
        </form>
      </div>
    </nav>

    <hr />
  </header>
);

export default Header;
