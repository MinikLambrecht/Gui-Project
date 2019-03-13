import React, { Component } from 'react';
import Dropdown from 'react-dropdown';
import './Pages/Styles/Map.css';

const fetch = require("isomorphic-fetch");
const { compose, withProps, withHandlers } = require("recompose");
const { withScriptjs, withGoogleMap, GoogleMap, Marker,} = require("react-google-maps");

/* global google */
const MapWithAMarkerClusterer = compose(
  withProps({
    googleMapURL: "https://maps.googleapis.com/maps/api/js?key=" + process.env.REACT_APP_GOOGLE_API_KEY + "&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `400px` }} />,
    mapElement: <div style={{ height: `100%` }} />,
  }),
  withHandlers({
    onMarkerClustererClick: () => (markerClusterer) => {
      const clickedMarkers = markerClusterer.getMarkers()
      console.log(`Current clicked markers length: ${clickedMarkers.length}`)
      console.log(clickedMarkers)
    },
		onMarkerClick: () => (props, marker, e) => {
	    this.setState({
	      selectedPlace: props,
	      activeMarker: marker,
	      showingInfoWindow: true
	    });
		},
		onClose: () => (props) => {
		    if (this.state.showingInfoWindow) {
		      this.setState({
		        showingInfoWindow: false,
		        activeMarker: null
		      });
		    }
		  },
  }),
  withScriptjs,
  withGoogleMap
)(props =>
  <GoogleMap
    defaultZoom={12}
    defaultCenter={{ lat: 55.396229, lng: 10.390600 }}
  >
	{props.markers.map(marker => (
		<Marker
			key={marker.Id}
			position={{ lat: marker.Coordinates.lat, lng: marker.Coordinates.lng }}
		>
			<div>{marker.Parkname}</div>
		</Marker>
	))}
  </GoogleMap>
);

export default class Map extends Component{
	componentWillMount() {
    this.setState({ markers: [] })
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
		.then(res => res.json())
		.then(data => {
			this.setState({markers: data.DogParks_Fyn});
		});
	}

	getOptions( arr ){
		for( let i = 0; i < this.state.markers.length; i++){
			arr[i] = this.state.markers[i].Parkname;
		}
	}

	render() {
		let arrT = [];
		this.getOptions(arrT);
    return (
			<div>
	      <MapWithAMarkerClusterer markers={this.state.markers} />
				<br />
				<div>
					<Dropdown options={arrT} onChange={this._onSelect} value={arrT[0]} placeholder="Select an option" />
					<button className="btn btn-primary"> Submit Request </button>
				</div>
			</div>
    )
  }
}
