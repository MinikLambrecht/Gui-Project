/**
 * This component serves as our search page
 */
import React, { Component } from 'react';   // Imports dependencies from react
import Map from '../Map';                   // Imports our Map.js component

/**
 * This is our class that will be exported and
 * where all our code is in.
 */
export default class Search extends Component {
  /**
   * Renders our Search page and exports it, so it can be used later on
   */
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
