import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Groverlogo from "../../img/groverlogo.png";
import "../../styles/home.scss";

export class Search extends React.Component {
	render() {
		return (
			<div className="container">
				<nav id="sticky" className="navbar navbar-expand-lg fixed-top scrolling-navbar">
					<p>
						<img style={{ width: "10%", height: "10%" }} src={Groverlogo} />
					</p>

					<span id="log">
						<Link to={"/"}>
							<strong>LOG IN</strong>
						</Link>
					</span>
				</nav>
			</div>
		);
	}
}
