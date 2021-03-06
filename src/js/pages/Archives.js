import React from "react";

import Article from "../components/Article";

export default class Archives extends React.Component {
	render() {
		const { query } = this.props.location;
		const { params } = this.props;
		const { article } = params;
		const { date, filter } = query;

		const Articles = [
			"Some Article",
			"Some Other Article",
			"Blue Skies",
			"Gray Skies",
			"Lucy In The Skies",
			"M.E.T.H.O.D.M.A.N"
		].map((title, i) => <Article key={i} title={title}/> );

		return (
			<div>
				<h1>Archives</h1>
				article: {article}, date: {date}, filter: {filter}
				<div class="row">{Articles}</div>
			</div>
		);
	}
}
