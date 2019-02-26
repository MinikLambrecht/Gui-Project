import React from 'react';

import '../../styles/pagecss/Contact/Contact'

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
                    <label htmlFor="name">Name</label>
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
                    <label htmlFor="subject">Subject</label>
                    <select id="subject" name="subject" className="form-control" required="required">
                      <option value="na" defaultValue="">Choose One:</option>
                      <option value="service">General Customer Service</option>
                      <option value="suggestions">Suggestions</option>
                      <option value="product">Product Support</option>
                    </select>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label htmlFor="name">Message</label>
                    <textarea name="message" id="message" className="form-control" rows="9" cols="25" required="required" placeholder="Message"></textarea>
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

              <strong>Phone</strong><br />
              (679) 777-9846 <br />

              <strong>E-mail</strong><br />
              <a href="mailto:#">Playtime@GDC.com</a>
            </address>
          </form>
        </div>
      </div>
    </div>
  </div>
);

export default Contact;
