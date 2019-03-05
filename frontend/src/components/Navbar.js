import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logoutUser } from '../actions/authentication';
import { withRouter } from 'react-router-dom';

class Navbar extends Component {

    onLogout(e) {
        e.preventDefault();
        this.props.logoutUser(this.props.history);
    }

    render() {
        const {isAuthenticated, user} = this.props.auth;
        const authLinks = (
          <div className="collapse navbar-collapse" id="NavbarToggle">
            <NavLink className="navbar-brand" to="/">GDC</NavLink>
            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link" exact={true} activeClassName="nav-link active" to="/">Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" activeClassName="nav-link active" to="/Search">Search</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" activeClassName="nav-link active" to="/contact">Contact Us</NavLink>
              </li>
            </ul>
            <form className="form-inline navbar-nav my-2 my-lg-0">
              <a href="" className="nav-link" onClick={this.onLogout.bind(this)}>
                  <img src={user.avatar} alt={user.name} title={user.name}
                      className="rounded-circle"
                      style={{ width: '25px', marginRight: '5px'}} />
                          Logout
              </a>
            </form>
          </div>
        )
      const guestLinks = (
      <div className="collapse navbar-collapse" id="NavbarToggle">
        <NavLink className="navbar-brand" to="/">GDC</NavLink>
        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
          <li className="nav-item">
            <NavLink className="nav-link" exact={true} activeClassName="nav-link active" to="/">Home</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" activeClassName="nav-link active" to="/contact">Contact Us</NavLink>
          </li>
        </ul>
        <form className="form-inline navbar-nav my-2 my-lg-0">
          <li className="nav-item">
            <NavLink className="nav-link" to="/register">Register</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/login">Login</NavLink>
          </li>
        </form>
      </div>
      )
        return(
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#NavbarToggle" aria-controls="NavbarToggle" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
                {isAuthenticated ? authLinks : guestLinks}
            </nav>
        )
    }
}
Navbar.propTypes = {
    logoutUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    auth: state.auth
})

export default connect(mapStateToProps, { logoutUser }, null,{ pure: false })(withRouter(Navbar));
