import React from 'react';
import {BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';


const Header = () => (
  <header>
    <Link to="/">Home</Link>

    <nav>
     <ul>
       <li><NavLink exact activeClassName="current" to='/'>Home</NavLink></li>
       <li><NavLink exact activeClassName="current" to='/about'>About</NavLink></li>
       <li><NavLink exact activeClassName="current" to='/contact'>Contact</NavLink></li>
     </ul>
   </nav>

    <hr />
  </header>
);

export default Header;
