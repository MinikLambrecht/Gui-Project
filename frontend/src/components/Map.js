/**
 * This is a component that renders everything on the search page
 */
import React, { Component } from 'react';   // Imports dependencies from react
import Dropdown from 'react-dropdown';      // Imports dependencies for dropdown
import PhoneInput from './PhoneInput.js';   // Imports our PhoneInput script
import './Pages/Styles/Dropdown.css';       // Imports stylesheet

const fetch = require("isomorphic-fetch");  // Require to fetch our data

// Variables
let ids = [];           // Array
let cities = [];        // Array
let parks = [];         // Array
let latitudes = [];     // Array
let longtitudes = [];   // Array

const requests = [
  {Id: 0, name: "Albert", mail: "Albert@gmail.com", phone: "88293548", msg: "Hey! I'm looking for are playdate for my daisy. She's an dalmantian, 3 months old, curious and loves to play!"},
  {Id: 1, name: "George", mail: "George@gmail.com", phone: "67558246", msg: "Hello fellow dog lovers. Me an my dog are heading our to the park, com meet us! My brian is a 2 year old Akita and loves to play and have fun, we'll be at the park the next 2 hours!"},
  {Id: 2, name: "Liz", mail: "Liz@gmail.com", phone: "91854762", msg: "I've just gotten my little baby and want her to get used to other dogs, we're going to the park in 30 minutes, Crystal is 1 month old, She's a pure Pomeranian and has soo much energy. Come to the park and help her loose a little up around her own kin!"}
];

const listRequestNames = requests.map((data) =>
  <li key={data.Id}>{data.name} <ul>{data.msg}</ul></li>
);

/**
 * The global google statement at the line below imports dependencies,
 * that we need for the google maps api later on .
 */

/* global google */
const { compose, withProps } = require("recompose");
const {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
  InfoWindow
} = require("react-google-maps");

/**
 * This const is used like a method to render our map
 * for easier access later on or if needed more than one place.
 */
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

/**
 * This is our class that will be exported and
 * where all our code is in.
 */
export default class Map extends Component{
  /**
   * Here we define out states, which is best defined
   * as a global variable for those who dont know
   */
  constructor(props) {
    super(props);
    this.state = {
      markers: [],
      Desc: ""
    };

    this._onSelect = this._onSelect.bind(this);
  }
    /**
     * Built-in method that runs when our page has loaded.
     * We currently use this feature to load in out data
     * to an array
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

    /**
     * Distributes our data to different arrays
     * for easier data management later on
     */
    getOptions( idArr, cityArr, parkArr, latArr, lngArr ) {
      for( let i = 0; i < this.state.markers.length; i++){
        idArr[i] = this.state.markers[i].Id;
        cityArr[i] = this.state.markers[i].City;
        parkArr[i] = this.state.markers[i].Parkname;
        latArr[i] = this.state.markers[i].Coordinates.lat;
        lngArr[i] = this.state.markers[i].Coordinates.lng;
      }
    }

    /**
     * Used in the Dropdowns onChange event
     * and tells the dropdown what to do when
     * we change its value
     */
    _onSelect(e) {
        this.setState({ Desc: e.target.value });
        }

/**
 * Split our data into individual arrays and render our page
 */
render() {
  this.getOptions(ids, cities, parks, latitudes, longtitudes);
  return (
			<div>
        <MapWithAMarker markers={this.state.markers} /> {/*Here we utilizes our method, rendering our map and passes the data we've fetched*/}

        <br />

        <nav>
					<div className="nav nav-tabs nav-fill" id="nav-tab" role="tablist">
						<a className="nav-item nav-link active" id="nav-home-tab" data-toggle="tab" href="#nav-home" role="tab" aria-controls="nav-home" aria-selected="true">Post appointments</a>
						<a className="nav-item nav-link" id="nav-about-tab" data-toggle="tab" href="#nav-about" role="tab" aria-controls="nav-about" aria-selected="false">Find appointments</a>
					</div>
				</nav>

				<div className="tab-content py-3 px-3 px-sm-0" id="nav-tabContent">

          {/*Post appointment tab*/}
					<div className="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
            <div className="row">
              <div className="col-4">
                <Dropdown options={parks} onChange={this._onChange} value={parks[0]} placeholder="Pick park" />

                <hr />
                <input type="text" placeholder="Name" required/> <br/> <br/>
                <input type="email" placeholder="Mail" required/> <br/> <br/>
                <PhoneInput />
                <br />
                <button type="submit" className="btn btn-primary">Add new request</button>
              </div>
              <div className="col-8">

              </div>
            </div>
					</div>

          {/*Find appointment tab*/}
					<div className="tab-pane fade" id="nav-about" role="tabpanel" aria-labelledby="nav-about-tab">
          <div className="row">
              <div className="col-4">
                <Dropdown options={parks} onChange={this._onChange} value={parks[0]} placeholder="Pick park" />

                <hr />
                <button type="submit" className="btn btn-primary">Search requests</button>
              </div>
              <div className="col-8">
                <ul>
                  {listRequestNames}
                </ul>
              </div>
            </div>
					</div>
				</div>
			</div>
    );
  }
}
