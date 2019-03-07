import App from './App';
import React from 'react';
import store from './store';
import {render} from 'react-dom';
import jwt_decode from 'jwt-decode';
import { Provider } from 'react-redux';
import setAuthToken from './setAuthToken';
import { setCurrentUser, logoutUser } from './actions/authentication';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import Contact from './components/Pages/Contact';
import Register from './components/Pages/Register';
import Login from './components/Pages/Login';
import Home from './components/Pages/Home';
import Search from './components/Pages/Search';
import NotFound from './components/Pages/NotFound';

import './components/Pages/Styles/DefaultTheme.css';

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
