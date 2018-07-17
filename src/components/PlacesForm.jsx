import React, { Component } from 'react';
import '../App.css';
import ModelDisplay from './ModelDisplay';
import IconDisplay from './IconDisplay';

class PlacesForm extends Component {

    registerNewPlace(){}
    deletePlace(){}
    editPlace(){}

    render() {
        return (
                <div id="PlacesForm">
                    <form  className="menu-form">
                        <input type="text" id="place-id" value="" hidden/>
                        <div  className="form-row">
                            <label htmlFor="name">Nome</label>
                            <input className="form-control" type="text" id="name" required/>
                        </div>

                        <div  className="form-row">
                            <label htmlFor="area">Area</label>
                            <select  className="custom-select htmlForm-control" id="area" required onChange={console.log(this)}>
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
                                <label htmlFor="lat">Latitude</label>
                                <input  className="form-control" type="text" id="lat" placeholder="Latitude" readOnly required/>    
                            </div>
                            
                            <div  className="form-group col">
                                <label htmlFor="lng">Longitude</label>
                                <input className="form-control" type="text" id="lng" placeholder="Longitude" readOnly required/>
                            </div>
                        </div>

                        <div className="form-group row">

                            <div  className="form-group col-6">
                                <label htmlFor="info">Descrição</label>
                                <textarea  className="form-control" id="info" rows="6" cols="40"></textarea> 
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