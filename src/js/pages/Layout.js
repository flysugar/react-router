import React from "react";
import { Link } from "react-router";

export default class Layout extends React.Component {

	render() {
		return (
			<div>
				<h1>KillerNews.net</h1>
				this.props.children: {this.props.children}
				<Link to="archives"><button class="btn btn-danger">Archives</button></Link>
				<Link to="/"><button class="btn btn-success">Featured</button></Link>
				<Link to="settings"><button class="btn btn-info">Settings</button></Link>
			</div>
		);
	}
}
