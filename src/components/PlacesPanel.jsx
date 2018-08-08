import React, { Component } from 'react';
import '../App.css';
import PlacesForm from './PlacesForm';

//onClick={clearPlaceForm();toggleInspectPlaces();}

class PlacesPanel extends Component {

	constructor(props){
		super(props);
		this.state = {
			placeName : '',
			areas: '',
			selectedArea : '',
			latitude : 0,
			longitude : 0,
			info : '',
		};
	}

	toggleInspectPlaces(){
	}

	toggleAddPlaces(){
	}

	render() {
		return (
				<div>
	                <ul className="nav nav-pills nav-justified nav-pills-custom" role="tablist">
	                  <li className = "nav-item" id = "inspect-place-pill"><a className="nav-link active" data-toggle="pill" onClick={this.toggleInspectPlaces}>Inspecionar</a></li>
	                  <li className = "nav-item" id = "new-place-pill"><a className="nav-link" data-toggle="pill" onClick={this.toggleAddPlaces}>Adicionar Novo</a></li>
	                </ul>
	                <PlacesForm selectedPlace = {this.props.selectedPlace}/>
				</div>
		);
	}

}

export default PlacesPanel;