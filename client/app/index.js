import React from 'react';
import {render} from 'react-dom';
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom'

import App from './components/App/App';

import Home from './components/Home/Home';
import About from './components/About/About';
import Contact from './components/Contact/Contact';

import Register from './components/Register/Register';
import Login from './components/Login/Login';

import NotFound from './components/App/NotFound';


render((
  <Router>
    <App>
      <Switch>
        <Route exact path='/' component={Home}></Route>
        <Route path='/about' component={About}></Route>
        <Route path='/contact' component={Contact}></Route>
        <Route path='/register' component={Register}></Route>
        <Route path='/login' component={Login}></Route>
        <Route component={NotFound}/>
      </Switch>
    </App>
  </Router>
), document.getElementById('app'));
