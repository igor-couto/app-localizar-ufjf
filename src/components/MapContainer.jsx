import React, { Component } from 'react';
import '../App.css';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

//<h1>{this.state.selectedPlace.name}</h1>

var markers = [];
const url = 'http://localhost:4444/';
const initialLat = -21.77710;
const initialLng = -43.366822;

export class MapContainer extends Component {
	
	constructor(props) {
		super(props);
		this.onMarkerClick = this.onMarkerClick.bind(this);
		this.state = {
			showingInfoWindow: false,
			activeMarker: {},
			selectedPlace: {}
		};

		//this.onMarkerDragEnd = this.onMarkerDragEnd.bind(this);
	}
	
	onMarkerClick(markerProps, marker, clickEvent) {
		this.setState({
			selectedPlace: markerProps,
			activeMarker: marker,
			showingInfoWindow: true
		});
		setTimeout( () => this.setState({showingInfoWindow : false}), 5000);
		this.props.switchSelectedPlace(markerProps);
	}

	onMarkerDragEnd(markerProps, marker, coordinates){
		let { latLng } = coordinates;
		let lat = latLng.lat();
		let lng = latLng.lng();

		let updatedPlace = {
			position : { lat: lat, lng : lng}
		};

		this.props.switchSelectedPlace(updatedPlace);
	}

	getPlaces(){
		fetch(url + 'places', { method: 'get', dataType: 'json', headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json'
		} })
		.then( response  => response.json()).then( places => {
			places.forEach( place => {
				let marker = {
					name: place.name ,
					position : { lat: place.lat, lng : place.lng},
					draggable: true,
					info: place.info,
					area : place.area,
					//icon: place.icon,
					//model: place.model,
					placeID : place._id
				}
				markers.push(marker);
			});
			let a = {activeMarker : markers[4]}
			this.setState({activeMarker : markers[4]});
			this.props.switchSelectedPlace(markers[4]);
		});
	}

    componentWillMount(){
    	this.getPlaces();
    }

    render() {
    	return (
    		<div id="map-component">
        		<Map google={this.props.google} zoom={16} center={{ lat: initialLat, lng: initialLng }}>
            		{
            			markers.map ( marker => {
            				return (
            					<Marker onClick={this.onMarkerClick} key={marker.name} title={marker.name} name={marker.name} position={marker.position} area={marker.area}  info={marker.info} draggable={marker.draggable} onDragend={()=>this.onMarkerDragEnd}/>
            				)
            			})
            		}
            		<InfoWindow onClose={this.onInfoWindowClose} marker={this.state.activeMarker} visible={this.state.showingInfoWindow}>
            		    <div>
              				<h6>{this.state.selectedPlace.name}</h6>
            			</div>
            		</InfoWindow>
        		</Map>
    		</div>
    	)
    }
}

export default GoogleApiWrapper({
	apiKey: "AIzaSyBA-S3SFZzXjgaAe4PMva1i_vnXFk9ebtg"
})(MapContainer)