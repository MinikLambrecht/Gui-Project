import React, { Component } from 'react';
import 'whatwg-fetch';

import {getFromStorage, setInStorage} from '../../utils/Storage';

import '../../styles/pagecss/Register/Register'

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      token: '',
      signUpError: '',
      signUpEmail: '',
      signUpPassword: '',
    };

    this.onTextboxChangeSignUpEmail = this.onTextboxChangeSignUpEmail.bind(this);
    this.onTextboxChangeSignUpPassword = this.onTextboxChangeSignUpPassword.bind(this);

    this.onSignUp = this.onSignUp.bind(this);
  }

  componentDidMount() {
    const obj = getFromStorage('GPC Playtime');
    if (obj && obj.token) {
      const { token } = obj;
      // Verify token
      fetch('/api/account/verify?token=' + token)
        .then(res => res.json())
        .then(json => {
          if (json.success) {
            this.setState({
              token,
              isLoading: false
            });
          } else {
            this.setState({
              isLoading: false,
            });
          }
        });
    } else {
      this.setState({
        isLoading: false,
      });
    }
  }

  onTextboxChangeSignUpEmail(event) {
    this.setState({
      signUpEmail: event.target.value,
    });
  }

  onTextboxChangeSignUpPassword(event) {
    this.setState({
      signUpPassword: event.target.value,
    });
  }

  onSignUp() {
    // Grab state
    const {
      signUpEmail,
      signUpPassword,
    } = this.state;

    this.setState({
      isLoading: true,
    });

    // Post request to backend
    fetch('/api/account/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: signUpEmail,
        password: signUpPassword,
      }),
    }).then(res => res.json())
      .then(json => {
        console.log('json', json);
        if (json.success) {
          this.setState({
            signUpError: json.message,
            isLoading: false,
            signUpEmail: '',
            signUpPassword: '',
          });
        } else {
          this.setState({
            signUpError: json.message,
            isLoading: false,
          });
        }
      });
  }

  render() {
    const {
      isLoading,
      token,
      signUpEmail,
      signUpPassword,
      signUpError,
    } = this.state;

    if (isLoading) {
      return (<div><p>Loading...</p></div>);
    }

    if (!token) {
      return (
        <div>
          <div>
            <div className="wrapper fadeInDown">
              <div id="formContent">
                <div className="fadeIn first">
                <h1>Register</h1>
                {
                  (signUpError) ? (
                    <p>{signUpError}</p>
                  ) : (null)
                }
              </div>

              <form>
                <input type="email" placeholder="Email" className="fadeIn second" value={signUpEmail} onChange={this.onTextboxChangeSignUpEmail}/>
                <input type="password" placeholder="Password" className="fadeIn third" value={signUpPassword} onChange={this.onTextboxChangeSignUpPassword}/>
                <input type="submit" className="fadeIn fourth" onClick={this.onSignUp} value="Register"/>
              </form>

              <div id="formFooter">
                <a className="underlineHover" href="#">Forgot Password?</a>
              </div>

              </div>
            </div>
          </div>
        </div>
      );
    }

    return (
      <div>
        <p>test</p>
      </div>
    );
  }
}

export default Home;
