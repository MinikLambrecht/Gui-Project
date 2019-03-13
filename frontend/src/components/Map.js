import React, { Component } from 'react';
import { withGoogleMap, GoogleMap, withScriptjs, InfoWindow, Marker } from "react-google-maps";
import Geocode from "react-geocode";
import Autocomplete from 'react-google-autocomplete';
import ParkData from '../Hundeskov.json';

let lat = [];
let lng = [];

Geocode.setApiKey(process.env.REACT_APP_GOOGLE_API_KEY);
Geocode.enableDebug();

class Map extends Component{

	constructor( props ){
		super( props );
		this.state = {
      onCenterChange: PropTypes.func, // @controllable generated fn
      onZoomChange: PropTypes.func, // @controllable generated fn
      onBoundsChange: PropTypes.func,
      onMarkerHover: PropTypes.func,
      onChildClick: PropTypes.func,
      center: PropTypes.any,
      zoom: PropTypes.number,
      markers: PropTypes.any,
      parks: [ lat, lng],
			address: '',
			city: '',
			park: '',
		}
	}

  static defaultProps = {
    center: new List([55.399563, 10.385576]),
    zoom: 12
  }

  shouldComponentUpdate = shouldPureComponentUpdate;

	/**
	 * Get the current address from the default map position and set those values in the state
	 */
	componentDidMount() {
    for( let i = 0; i < ParkData.dogparks.length; i++ ) {
      lat[i] = ParkData.dogparks[i].Information.lat;
      lng[i] = ParkData.dogparks[i].Information.lng;
      this.setState({park: ParkData.dogparks[i].Information.Parkname})
      this.setState({city: ParkData.dogparks[i].Information.City})
    }
    console.log(this.state.parks[0][1]);
	}


const markers = this.props.markers

	render(){
		const AsyncMap = withScriptjs(
			withGoogleMap(
				props => (
					<GoogleMap
           google={ this.props.google }
           defaultZoom={ this.state.mapPosition.zoom }
           defaultCenter={{ lat: this.state.mapPosition.lat, lng: this.state.mapPosition.lng }}
					>

						{/* InfoWindow on top of marker */}
						<InfoWindow
							onClose={this.onInfoWindowClose}
							position={{ lat: ( this.state.markerPosition.lat + 0.0018 ), lng: this.state.markerPosition.lng }}
						>
							<div>
								<span style={{ padding: 0, margin: 0, color: '#000' }}>{ this.state.park }</span>
							</div>
						</InfoWindow>

						{/*Marker*/}
						<{testMarker}
						<Marker />
            <Autocomplete
							style={{
								width: '100%',
								height: '40px',
								paddingLeft: '16px',
								marginTop: '2px',
								marginBottom: '100px'
							}}
							onPlaceSelected={ this.onPlaceSelected }
							types={['(regions)']}
						/>
					</GoogleMap>
				)
			)
		);
		let map;
		if( this.props.center.lat !== undefined ) {
			map = <div>
				<div>
					<div className="form-group">
						<label htmlFor="">City</label>
						<input type="text" name="city" className="form-control" onChange={ this.onChange } readOnly="readOnly" value={ this.state.city }/>
					</div>
					<div className="form-group">
						<label htmlFor="">Park</label>
						<input type="text" name="state" className="form-control" onChange={ this.onChange } readOnly="readOnly" value={ this.state.park }/>
					</div>
					<div className="form-group">
						<label htmlFor="">Address</label>
						<input type="text" name="address" className="form-control" onChange={ this.onChange } readOnly="readOnly" value={ this.state.address }/>
					</div>
          <button onClick={this.handleLatitude}> Test </button>
				</div>

				<AsyncMap
					googleMapURL= {"https://maps.googleapis.com/maps/api/js?key=" + process.env.REACT_APP_GOOGLE_API_KEY + "&libraries=places"}
					loadingElement={
						<div style={{ height: `100%` }} />
					}
					containerElement={
						<div style={{ height: this.props.height }} />
					}
					mapElement={
						<div style={{ height: `100%` }} />
					}
				/>
			</div>
		} else {
			map = <div style={{height: this.props.height}} />
		}
		return( map )
	}
}

export default Map
