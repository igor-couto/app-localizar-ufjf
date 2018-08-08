import React, { Component } from 'react';
import '../App.css';
import ModelDisplay from './ModelDisplay';
import IconDisplay from './IconDisplay';

class PlacesForm extends Component {

    constructor(props){
        super(props);
    }

    registerNewPlace(){}
    deletePlace(){}
    editPlace(){}

    clearForm(){
        document.getElementById('name').innerHTML = "";
    }

    updateForm(props) {
        //props.areas
    }

    render() {
        return (
                <div id="PlacesForm">
                    <form className="menu-form">
                        <input type="text" id="place-id" value="" hidden/>
                        <div  className="form-row">
                            <label htmlFor="name">Nome</label>
                            <input className="form-control" type="text" id="name" required value={this.props.selectedPlace.name}/>
                        </div>

                        <div  className="form-row">
                            <label htmlFor="area">Area</label>
                            <select  className="custom-select htmlForm-control" id="area" value={this.props.selectedPlace.area} required>
                                <option value="">Areas...</option>
                                <option value="ICE">ICE</option>
                                <option value="Engenharia">Engenharia</option>
                                <option value="ICB">ICB</option>
                                <option value="ICH">ICH</option>
                                <option value="Reitoria">Reitoria</option>
                            </select>
                        </div>

                        <div className="form-group row latlng-input">
                            <div  className="form-group col">
                                <label htmlFor="lat"></label>
                                <input  className="form-control" type="text" id="lat" placeholder="Latitude" value={this.props.selectedPlace.position.lat} readOnly required/>    
                            </div>
                            
                            <div  className="form-group col">
                                <label htmlFor="lng"></label>
                                <input className="form-control" type="text" id="lng" placeholder="Longitude" value={this.props.selectedPlace.position.lng} readOnly required/>
                            </div>
                        </div>

                        <div className="form-group row">

                            <div  className="form-group col-6">
                                <label htmlFor="info">Descrição</label>
                                <textarea  className="form-control" id="info" rows="6" cols="40" value={this.props.selectedPlace.info}></textarea> 
                            </div>

                            <div  className="form-group col-3">
                                <ModelDisplay/>
                            </div>

                            <div  className="form-group col-3">
                                <IconDisplay/>
                            </div>
                        </div>

                        <div  className="form-group row buttons">

                            <div id="edit-button"  className="form-group col-xs-1" hidden>
                                <button onClick={this.editPlace()} type="button"  className="btn btn-primary custom-btn btn-block">Editar</button>
                            </div>

                            <div id="delete-button"  className="form-group col-xs-1" hidden>
                                <button onClick={this.deletePlace()} type="button"  className="btn btn-danger custom-btn btn-block">Remover</button>
                            </div>
                        
                            <div id="create-button"  className="form-group col-xs-1" hidden>
                                <button onClick={this.registerNewPlace()} type="button"  className="btn btn-success">Criar Lugar</button>
                            </div>      
                            
                        </div>
                    </form>
                </div>
        );
    }
}
export default PlacesForm;