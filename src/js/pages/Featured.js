import React from "react";

import Article from "../components/Article";

export default class Featured extends React.Component {
	render() {
		const Articles = [
			"Some Article",
			"Some Other Article",
			"Blue Skies",
			"Gray Skies",
			"Lucy In The Skies",
			"M.E.T.H.O.D.M.A.N"
		].map((title, i) => <Article key={i} title={title}/> );

		const adText = [
			"Ad Spot #1",
			"Ad Spot #2",
			"Ad Spot #3",
			"Ad Spot #4"
		];

		const randomAd = adText[Math.round(Math.random() * (adText.length-1) )];
		console.log(randomAd);

		return (
			<div>
				<div class="row">
					<div class="col-lg-12">
						<div class="well text-center">
							{randomAd}
						</div>
					</div>
				</div>

				<div class="row">{Articles}</div>
			</div>
		);
	}
}
