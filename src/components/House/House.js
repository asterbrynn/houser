import React, {Component} from 'react';

export default class House extends Component {
	render() {
		let {house} = this.props;
		return(
			<div style={{backgroundColor: "#DEDEDE", margin: 20,minWidth: "85vw"}}>
				<p>{house.name}</p>
				<p>{house.address}</p>
				<p>{house.city}</p>
				<p>{house.state}</p>
				<p>{house.zip}</p>
				<button onClick={() => this.props.deleteHouse(house.id)}>Delete</button>
			</div>
		)
	}
}