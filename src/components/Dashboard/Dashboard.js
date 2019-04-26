import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import House from '../House/House';

export default class Dashboard extends Component {
	constructor() {
		super();
		this.state = {
			houses: []
		}
		this.deleteHouse = this.deleteHouse.bind(this);
	}
	componentDidMount() {
		this.getHouseData();
	}
	getHouseData() {
		axios.get('/api/houses').then(res => {
			this.setState({
				houses: res.data
			})
		}).catch(err => console.log("get problem lol", err))
	}
	deleteHouse(id) {
		axios.delete(`/api/house/${id}`).then(() => {
			this.getHouseData();
		}).catch(err => console.log("delete problem lol", err))
	}
	componentDidUpdate(pastProps) {
		if (pastProps.match.params.id !== this.props.match.params.id) {
			this.getHouseData();
		}
	}
	
	render() {
		return(
			<div>
				<h1 style={{color: "#3B5249"}}>Dashboard</h1>
				<button>
					<Link to="/wizard">Add New Property</Link>
				</button>
				{this.state.houses.map(house => {
					console.log(house.id)
					return <House key={house.id} house={house}
						deleteHouse={this.deleteHouse}/>
				})}
			</div>
		)
	}
}