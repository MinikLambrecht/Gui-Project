import App from './App';
import React from 'react';
import store from './store';
import {render} from 'react-dom';
import jwt_decode from 'jwt-decode';
import { Provider } from 'react-redux';
import setAuthToken from './setAuthToken';
import { setCurrentUser, logoutUser } from './actions/authentication';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import Contact from './components/Contact';
import Register from './components/Register';
import Login from './components/Login';
import Home from './components/Home';
import NotFound from './components/NotFound';

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
          <Route component={NotFound}/>
        </Switch>
      </App>
    </Router>
  </Provider>
), document.getElementById('root'));
