import React from "react";
import Cards from "../component/cards";
import "../../styles/home.scss";
import Jumbotron from "../component/jumbotron";
import "bootstrap/dist/css/bootstrap.min.css";

export class Home extends React.Component {
	render() {
		return (
			<div className="card-deck">
				<Cards />
			</div>
		);
	}
}
