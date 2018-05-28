import React, { Component } from 'react';
import '../App.css';

class ModelDisplay extends Component {

	uploadModel(event){}

	render() {
		return (
				<div>
		            <select  className="custom-select htmlForm-control" id="model-name-selection">
	                    <option value="pin">Pin</option>
	                    <option value="biblioteca">Livro</option>
	                    <option value="cantina">Sala de Aula</option>
	                    <option value="cantina">Laboratório</option>
	                    <option value="cantina">Comida</option>
	                    <option value="cantina">Lanche</option>
	                </select>
	                <div  className="model-container" id="model-container"></div>
	                <div  className="custom-file">
						<input type="file"  className="custom-file-input" id="model-upload" multiple="multiple" lang="pt-br" onChange={ event => this.uploadModel.bind()(event)}/>
	                    <label  className="custom-file-label" htmlFor="model-upload">Novo modelo...</label>
	                </div>
				</div>
		);
	}

}

export default ModelDisplay;