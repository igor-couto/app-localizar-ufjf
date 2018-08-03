import React, { Component } from 'react';
import '../App.css';
import PlacesForm from './PlacesForm';

//onClick={clearPlaceForm();toggleInspectPlaces();}

class PlacesPanel extends Component {

	constructor(){
		super();
		this.state = {
			placeName : '',
			areas: '',
			selectedArea : '',
			latitude : 0,
			longitude : 0,
			info : '',
		};
	}

	render() {
		return (
				<div>
	                <ul className="nav nav-pills nav-justified nav-pills-custom" role="tablist">
	                  <li className="nav-item" id="inspect-place-pill"><a className="nav-link active" data-toggle="pill" href="">Inspecionar</a></li>
	                  <li className="nav-item" id="new-place-pill"><a className="nav-link" data-toggle="pill" href="">Adicionar Novo</a></li>
	                </ul>
	                <PlacesForm/>
				</div>
		);
	}

}

export default PlacesPanel;