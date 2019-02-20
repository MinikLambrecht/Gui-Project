import React from 'react';
import { NavLink, Switch, Route, Link} from 'react-router-dom';
import './App.css';

import LinkContainer from 'react-bootstrap';

import { Navbar, Nav, NavItem, NavDropdown } from 'react-bootstrap';

const App = () => (
  <div className='app'>
    <Navigation />
    <Main />
  </div>
);

const Navigation = () => (
  // Make navbar without Href (Href reloads the site...)
  <Navbar collapseOnSelect id="navbar">
    <div className="container">
        <Navbar.Header className="navbar-header">
            <Link className="navbar-brand" to="/">Website</Link>
            <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
            <Nav id="nav">
                <LinkContainer exact to="/">
                    <NavItem>Home</NavItem>
                </LinkContainer>
                <LinkContainer exact to="/club">
                    <NavItem>Club</NavItem>
                </LinkContainer>
                <LinkContainer exact to="/contact">
                    <NavItem>Contact</NavItem>
                </LinkContainer>
            </Nav>
            <Nav pullRight>
                <LinkContainer to="/login">
                    <NavItem >Login</NavItem>
                </LinkContainer>
                <LinkContainer to="/register">
                    <NavItem>register</NavItem>
                </LinkContainer>
            </Nav>
        </Navbar.Collapse>
    </div>
</Navbar>
 );

const Home = () => (
  <div className='home'>
    <h1>Welcome to my portfolio website</h1>
    <p> Feel free to browse around and learn more about me.</p>
  </div>
);

const About = () => (
  <div className='about'>
    <h1>About Me</h1>
    <p>Ipsum dolor dolorem consectetur est velit fugiat. Dolorem provident corporis fuga saepe distinctio ipsam? Et quos harum excepturi dolorum molestias?</p>
    <p>Ipsum dolor dolorem consectetur est velit fugiat. Dolorem provident corporis fuga saepe distinctio ipsam? Et quos harum excepturi dolorum molestias?</p>
  </div>
);

const Contact = () => (
  <div className='contact'>
    <h1>Contact Me</h1>
    <p>You can reach me via email: <strong>hello@example.com</strong></p>
  </div>
);

const Main = () => (
  <Switch>
    <Route exact path='/' component={Home}></Route>
    <Route exact path='/about' component={About}></Route>
    <Route exact path='/contact' component={Contact}></Route>
  </Switch>
);

export default App;
