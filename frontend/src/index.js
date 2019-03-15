/**
 * This is used as our routing script
 */
import App from './App';                                                  // Imports our App component
import React from 'react';                                                // Imports dependencies from react
import store from './store';                                              // Imports our store script
import {render} from 'react-dom';                                         // Imports dependencies from react-dom
import jwt_decode from 'jwt-decode';                                      // Imports dependencies from jwt.decode
import { Provider } from 'react-redux';                                   // Imports dependencies from react-redux
import setAuthToken from './setAuthToken';                                // Imports our setAuthToken script
import { setCurrentUser, logoutUser } from './actions/authentication';    // Imports our authentication script
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'   // Imports dependencies from react-router-dom

import Contact from './components/Pages/Contact';                         // Imports our Contact page
import Register from './components/Pages/Register';                       // Imports our Register page
import Login from './components/Pages/Login';                             // Imports our Login page
import Home from './components/Pages/Home';                               // Imports our Home page
import Search from './components/Pages/Search';                           // Imports our Search page
import NotFound from './components/Pages/NotFound';                       // Imports our NotFound page

import './components/Pages/Styles/DefaultTheme.css';                      // Imports stylesheet

/**
 * Checks if we have a token saved in our localStorage.
 * If we do, decode it and set it to our current user,
 * and check if the time on the token has expired (Session run out)
 */
if(localStorage.jwtToken) {
  setAuthToken(localStorage.jwtToken);
  const decoded = jwt_decode(localStorage.jwtToken);
  store.dispatch(setCurrentUser(decoded));

  const currentTime = Date.now() / 1000;
  if(decoded.exp < currentTime) {
    store.dispatch(logoutUser());
    window.location.href = '/login'
  }
}

/**
 * This defines our routes and handles routing events
 */
render((
  <Provider store = { store }>
    <Router>
      <App>
        <Switch>
          <Route exact path="/" component={ Home } />
          <Route path="/contact" component={ Contact } />
          <Route path="/register" component={ Register } />
          <Route path="/login" component={ Login } />
          <Route path="/search" component={ Search } />
          <Route component={NotFound}/>
        </Switch>
      </App>
    </Router>
  </Provider>
), document.getElementById('root'));
