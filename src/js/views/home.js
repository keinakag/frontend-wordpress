import React from "react";
import Cards from "../component/cards";
import "../../styles/home.scss";
import Carrusel from "../component/carrusel";
import Navbar from "../component/navbar";
import { withRouter } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
export class Home extends React.Component {
	render() {
		return (
			<div>
				<div>
					<Navbar />
				</div>
				<Carrusel />
				<div className="card-columns">
					<Cards />
				</div>
			</div>
		);
	}
}
