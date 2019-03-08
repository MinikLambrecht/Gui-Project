import React, { Component } from 'react';
import MapT from '../Map';

import './Styles/SearchCSS.css';

export default class Search extends Component {
constructor() {
  super();
  this.state = {
    updateLoc: '',
    location: 'http://maps.google.com/?q=5700&output=embed'
    };

    this.addValue = this.addValue.bind(this);
    this.updateInput = this.updateInput.bind(this);
  }

  addValue(evt){
    evt.preventDefault();
    if (this.state.updateLoc !== undefined)
    {
      this.setState({ location: this.state.updateLoc })
    }
  }

  updateInput(evt) {
    this.setState({ updateLoc: 'http://maps.google.com/?q=' + evt.target.value + ', dog park&output=embed' })
  }



  render() {
    return (
      <div className="container">
        <div className="map-responsive">
          <MapT />
        </div>
        <input type="text" onChange={this.updateInput} className="form-control" placeholder="Postalcode/City name" />
        <button type="submit" onClick={this.addValue} className="btn btn-primary">Search</button>
      </div>
    );
  }
}
