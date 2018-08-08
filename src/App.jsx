import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import {MapContainer} from './components/MapContainer';
import PlacesPanel from './components/PlacesPanel'; 

export default class App extends Component {


  constructor(){
    super();
    this.state = {
      selectedPlace : {
        name: '',
        area: '',
        position : { lat: 0, lng : 0},
        info: '',
        icon: '',
        model: '',
      }
    };
  }


  switchSelectedPlaceHandler = (selectedPlace) => this.setState({selectedPlace});

  componentDidUpdate(prevProps){

  }

 render() {
    return (
      <div className="App">

        <script src="https://code.jquery.com/jquery-3.3.1.min.js" integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8=" crossOrigin="anonymous"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.1.0/js/bootstrap.min.js"></script>
        <link href="https://maxcdn.bootstrapcdn.com/bootstrap/4.1.0/css/bootstrap.min.css" rel="stylesheet"/>
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"/>

        <div id="message-box"></div>
        {/*<MapContainer google = {this.props.google}/>*/}
        <MapContainer google = {window.google} selectedPlace = {this.state.selectedPlace} switchSelectedPlace = {this.switchSelectedPlaceHandler} />
        <div className="menu">
          <div className="container">
            <PlacesPanel selectedPlace = {this.state.selectedPlace} switchPlace = {this.switchSelectedPlaceHandler}/>
          </div>
        </div>
      </div>
    );
  }
}

//https://www.npmjs.com/package/google-maps-react
//https://www.youtube.com/watch?v=UtIOMUQ7nWM