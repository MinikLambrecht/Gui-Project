import React from 'react';
import { withRouter } from 'react-router-dom';
import PhoneInput from './PhoneInput';

import './Styles/ContactCSS.css';

const Contact = () => (
  <div className="container">
    <div className='jumbotron jumbotron-sm'>
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-lg-12">
            <h1 className="h1">
              Contact us <small>Feel free to contact us</small>
            </h1>
          </div>
        </div>
      </div>
    </div>
    <div className="container">
      <div className="row">
        <div className="col-md-8">
          <div className="well well-sm">
            <form>
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <label htmlFor="name">Full Name</label>
                    <input type="text" className="form-control" id="name" placeholder="Enter name" required="required" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email Address</label>
                    <div className="input-group">
                      <span className="input-group-addon">
                      <span className="glyphicon glyphicon-envelope"></span>
                      </span>
                      <input type="email" className="form-control" id="email" placeholder="Enter email" required="required" />
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="name">Phone</label>
                    <PhoneInput />
                  </div>
                  <div className="form-group">
                    <label htmlFor="subject">Subject</label>
                    <select id="subject" name="subject" className="form-control" required="required">
                      <option value="na" defaultValue="">Choose One:</option>
                      <option value="report">Report User</option>
                      <option value="suggestions">Suggestions</option>
                      <option value="bug/other">Report a bug</option>
                      <option value="bug/other">Other</option>
                    </select>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label htmlFor="name">Message</label>
                    <textarea name="message" id="message" className="form-control" style={{height: '410px'}} rows="9" cols="25" required="required" placeholder="Message"></textarea>
                  </div>
                </div>
                <div className="col-md-12">
                  <button type="submit" className="btn btn-primary float-right" id="btnContactUs">Send Message</button>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="col-md-4">
          <form>
            <legend><span className="glyphicon glyphicon-globe"></span> GDC Playtime, Inc. Office</legend>
            <hr />
            <address>
              <strong>Address</strong><br />
              795 Folsom Ave, Suite 600<br />
              San Francisco, CA 94107<br />

              <div style={{height: '300px', width: '400px', color: '#000'}}>
                <iframe title="GDCLocation" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.340648538445!2d-122.40267868391813!3d37.78205581899731!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085807e0e3b97b5%3A0x2483cdf8ec689a6!2s795+Folsom+St+%23600%2C+San+Francisco%2C+CA+94107%2C+USA!5e0!3m2!1sda!2sdk!4v1551777408620" width="400" height="300" frameBorder="0" allowFullScreen></iframe>
              </div>

              <strong>Phone</strong><br />
              +1 (628) 777-9846 <br />

              <strong>E-mail</strong><br />
              <a href="mailto:#">Playtime@GDC.com</a>
            </address>
          </form>
        </div>
      </div>
    </div>
  </div>
);

export default withRouter(Contact);
