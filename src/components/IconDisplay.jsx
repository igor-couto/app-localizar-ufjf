import React, { Component } from 'react';
import '../App.css';

class IconDisplay extends Component {
	render() {
		return (
				<div>
		            <select  className="custom-select htmlForm-control" id="icon-name">
	                    <option value="pin">Pin</option>
	                </select>
	                <div  className="icon-container">
	                    <img src="/img/pin.png" alt="icone do marker"/>
	                </div>
	                <div  className="custom-file">
	                    <input type="file"  className="custom-file-input" id="icon-upload" lang="pt-br"/>
	                    <label  className="custom-file-label" htmlFor="model-upload">Novo arquivo...</label>
	                </div>
				</div>
		);
	}

}

export default IconDisplay;