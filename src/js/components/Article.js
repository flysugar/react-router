import React from "react";

export default class Article extends React.Component {
	render() {
		const { title } = this.props;

		return (
			<div class="col-md-4">
				<h2>{title}</h2>
				<p>Lorem ipsum dolor sit amte, sdfdsfdsfdsfs fdsf dsf dsf dsf dsf dsf sdfd f sd.<br/>
				<a class="btn btn-default" href="#">More Info</a></p>
			</div>
		);
	}
}