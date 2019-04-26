import React, {Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import House from '../House/House';

export default class Dashboard extends Component {
	constructor() {
		super();
		this.state = {
			houses: []
		}
	}
	componentDidMount() {
		axios.get('/api/houses').then(res => {
			this.setState({
				houses: res.data
			})
		}).catch(err => console.log('get problem lol', err))
	}
	render() {
		return(
			<div>
				<h1 style={{color: "#3B5249"}}>Dashboard</h1>
				<button>
					<Link to="/wizard">Add New Property</Link>
				</button>
				{this.state.houses.map(house => {
					return <House key={house.id} house={house}/>
				})}
			</div>
		)
	}
}