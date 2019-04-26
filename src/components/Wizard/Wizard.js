import React, {Component} from 'react';
import {Link} from 'react-router-dom';

export default class Wizard extends Component {
	constructor() {
		super();
		this.state = {
			name: "",
			address: "",
			city: "",
			state: "",
			zip: 0
		}
	}
	
	handleNameChange = e => {
		this.setState({
			name: e.target.value
		})
	}
	handleAddressChange = e => {
		this.setState({
			address: e.target.value
		})
	}
	handleCityChange = e => {
		this.setState({
			city: e.target.value
		})
	}
	handleStateChange = e => {
		this.setState({
			state: e.target.value
		})
	}
	handleZipChange = e => {
		this.setState({
			zip: e.target.value
		})
	}

	render() {
		console.log(this.state)
		return(
			<div>
				<h1>Add New Listing</h1>
				<button>
					<Link to="/">Cancel</Link>
				</button>
				<p>
					<label htmlFor="name">Name: </label>
					<input name="name" id="name" type="text"
						onChange={this.handleNameChange}/>
				</p>
				<p>
					<label htmlFor="address">Street Address: </label>
					<input name="address" id="address" type="text"
						onChange={this.handleAddressChange}/>
				</p>
				<p>
					<label htmlFor="city">City: </label>
					<input name="city" id="city" type="text"
						onChange={this.handleCityChange}/>
				</p>
				<p>
					<label htmlFor="state">State: </label>
					<input name="state" id="state" type="text"
						onChange={this.handleStateChange}/>
				</p>
				<p>
					<label htmlFor="zip">Zip Code: </label>
					<input name="zip" id="zip" type="number"
						onChange={this.handleZipChange}/>
				</p>
			</div>
		)
	}
}