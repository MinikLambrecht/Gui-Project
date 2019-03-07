import React, { Component } from 'react';

export default class Search extends Component {
constructor() {
  super();
  this.state = {
    location: "http://maps.google.com/?q=5700&output=embed",
    inputLoc: ""
    };
}

update() {

  this.setState({ location: "http://maps.google.com/?q=" + this.inputLoc + "&output=embed" });
}

    render() {
        return (
          <div className="container">
            <div className="row">
            <input type="text" value={this.state.inputLoc} className="form-control" placeholder="Postalcode/City name" />
            <button type="submit" onClick={this.update()} className="btn btn-primary">Search</button>
              <div className="col-sm">

              </div>
              <div className="col-sm">
                <iframe title="SearchForPark" src="http://maps.google.com/?q=5700&output=embed" width="600" height="450" frameBorder="0" allowFullScreen></iframe>
              </div>
              <div className="col-sm">
              {this.state.location}
              </div>
            </div>
          </div>
        );
    }
}
