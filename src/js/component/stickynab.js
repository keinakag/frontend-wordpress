import React from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { MDBContainer } from "mdbreact";
import "../../styles/demo.scss";
import Groverlogo from "../../img/groverlogo.png";

export default class Stickynab extends React.Component {
	render() {
		return (
			<nav id="sticky" className="navbar navbar-expand-lg fixed-top scrolling-navbar">
				<p>
					<img style={{ width: "10%", height: "10%" }} src={Groverlogo} />
				</p>
				<p id="log" className="navbar-text pull-right">
					<strong>LOG IN</strong>
				</p>
			</nav>
		);
	}
}
