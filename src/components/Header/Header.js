import React, {Component} from 'react';

export default class Header extends Component {
	render() {
		return (
			<div style={{backgroundColor: "#519872", color: "white",
			textAlign: "left", width: "100vw"}}>
				<header>
					<img style={{marginLeft: "5vw", marginRight: "1vw"}}
					src="https://cdn.discordapp.com/attachments/555135592103542826/571428280457101336/unknown.png" alt="logo"/>
					<h1 style={{display: "inline-block"}}>Houser</h1>
				</header>
			</div>
		)
	}
}