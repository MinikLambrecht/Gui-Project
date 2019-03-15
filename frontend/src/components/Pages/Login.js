/**
 * This component serves as our login page
 */
import React, { Component } from 'react';                   // Imports dependencies from react
import PropTypes from 'prop-types';                         // Imports dependencies from prop-types
import { connect } from 'react-redux';                      // Imports dependencies from react-redux
import { loginUser } from '../../actions/authentication';   // Imports our authentication script
import { withRouter } from 'react-router-dom';              // Imports dependencies from react-router-dom
import classnames from 'classnames';                        // Imports dependencies from classnames

/**
 * This is our class that will be exported and
 * where all our code is in.
 */
class Login extends Component {
  /**
   * Here we define out states, which is best defined
   * as a global variable for those who dont know
   */
    constructor() {
        super();
        this.state = {
            email: '',
            password: '',
            errors: {}
        }

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    /**
     * This method handles our input change in the input fields at our registration page
     * this.handleInputChange
     */
    handleInputChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    /**
     * This method handles the submit event
     * this.handleSubmit
     */
    handleSubmit(e) {
        e.preventDefault();
        const user = {
            email: this.state.email,
            password: this.state.password,
        }
        this.props.loginUser(user);
    }

    /**
     * Built-in method that runs when our page has loaded.
     * We currently use this feature to check if the user currnetly
     * is authenticated
     */
    componentDidMount() {
        if(this.props.auth.isAuthenticated) {
            this.props.history.push('/');
        }
    }

    /**
     * Built-in method that handles state update events.
     * We use this to update important states that should not
     * be updated in the render() method
     */
    componentWillReceiveProps(nextProps) {
        if(nextProps.auth.isAuthenticated) {
            this.props.history.push('/')
        }
        if(nextProps.errors) {
            this.setState({
                errors: nextProps.errors
            });
        }
    }

    /**
     * Render our page while handling the events we've setup
     */
    render() {
        const {errors} = this.state;
        return(
        <div className="container" style={{ marginTop: '50px', width: '700px'}}>
            <h2 style={{marginBottom: '40px'}}>Login</h2>
            <form onSubmit={ this.handleSubmit }>
                <div className="form-group">
                    <input
                    type="email"
                    placeholder="Email"
                    className={classnames('form-control form-control-lg', {
                        'is-invalid': errors.email
                    })}
                    name="email"
                    onChange={ this.handleInputChange }
                    value={ this.state.email }
                    />
                    {errors.email && (<div className="invalid-feedback">{errors.email}</div>)}
                </div>
                <div className="form-group">
                    <input
                    type="password"
                    placeholder="Password"
                    className={classnames('form-control form-control-lg', {
                        'is-invalid': errors.password
                    })}
                    name="password"
                    onChange={ this.handleInputChange }
                    value={ this.state.password }
                    />
                    {errors.password && (<div className="invalid-feedback">{errors.password}</div>)}
                </div>
                <div className="form-group">
                    <button type="submit" className="btn btn-primary">
                        Login User
                    </button>
                </div>
            </form>
        </div>
        )
    }
}

Login.propTypes = {
    loginUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    auth: state.auth,
    errors: state.errors
})

export default connect(mapStateToProps, { loginUser })(withRouter(Login))
