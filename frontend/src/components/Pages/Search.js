import React, { Component } from 'react';
import Map from '../Map';

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
        <div>
        <Map />
        </div>

      </div>
    );
  }
}
