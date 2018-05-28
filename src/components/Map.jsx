import React, { Component } from 'react';
import '../App.css';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
 
//<h1>{this.state.selectedPlace.name}</h1>

export class MapContainer extends Component {
	render() {
		return (
			<div ref="map" id="map-component">
		      <Map google={this.props.google} zoom={14}>
		 
		        <Marker onClick={this.onMarkerClick}
		                name={'Current location'} />
		 
		        <InfoWindow onClose={this.onInfoWindowClose}>
		            <div>
		              
		            </div>
		        </InfoWindow>
		      </Map>
			</div>
		);
	}
}

export default GoogleApiWrapper({
  apiKey: ('AIzaSyBA-S3SFZzXjgaAe4PMva1i_vnXFk9ebtg')
})(MapContainer)