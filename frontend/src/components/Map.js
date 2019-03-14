import React, { Component } from 'react';
import Dropdown from 'react-dropdown';
import './Pages/Styles/Map.css';

const fetch = require("isomorphic-fetch");

/* global google */
const { compose, withProps } = require("recompose");
const {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
  InfoWindow
} = require("react-google-maps");

const MapWithAMarker = compose(
  withProps({
    googleMapURL: "https://maps.googleapis.com/maps/api/js?key=" + process.env.REACT_APP_GOOGLE_API_KEY + "&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `400px` }} />,
    mapElement: <div style={{ height: `100%` }} />,
  }),
  withScriptjs,
  withGoogleMap
)(props =>
  <GoogleMap
    defaultZoom={11}
    defaultCenter={{ lat: 55.396229, lng: 10.390600 }}
    >
    {props.markers.map(function(item, index){
        return(
          <Marker
            onClick={props.onMarkerClick}
            position={{ lat: item.Coordinates.lat, lng: item.Coordinates.lng }}
          />
        )
      }
    )}
  </GoogleMap>
);

export default class Map extends Component{
  constructor(props) {
    super(props);
    this.state = {
      markers: [],
    };
  }
    /**
     * Get the current address from the default map position and set those values in the state
     */
    componentDidMount() {
      const url = [
        `https://gist.githubusercontent.com`,
        `/MinikLambrecht/5d7c5316d6fef731ff5c35018be774a7`,
        `/raw/8cd9dc30905f9beeea29f607e8cd0fbd3b4d8579/Dogparks.json`
      ].join("")

      fetch(url)
        .then(results => results.json())
        .then(results => {
          this.setState({markers: results.DogParks_Fyn});
        });
    }

    getOptions( arr ){
      for( let i = 0; i < this.state.markers.length; i++){
        arr[i] = this.state.markers[i].Parkname;
      }
    }

render() {
  let options = [];
  this.getOptions(options);
  return (
			<div>
        <MapWithAMarker markers={this.state.markers} />
				<br />
				<div>
          <Dropdown options={options} onChange={this._onSelect} value={options[0]} placeholder="Select an option" />
				</div>
			</div>
    );
  }
}
