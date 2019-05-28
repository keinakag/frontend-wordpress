import React from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { MDBContainer } from "mdbreact";
import "../../styles/demo.scss";
import Bkjumbo from "../../img/bkjumbo.jpg";

export default class Mainjumbo extends React.Component {
	render() {
		return (
			<div className="card card-image">
				<div className="text-white text-center rgba-stylish-strong py-5 px-4">
					<div className="py-5">
						<h5 className="h5 white-text">All Your TV In One Place</h5>
						<h2 className="card-title h2 my-4 py-2">
							Watch thousands of shows and movies, with plans starting
							<br /> at $5.99/month.
						</h2>
						<p className="mb-4 pb-2 px-md-5 mx-md-5">
							HBO®, HULU®, NETFLIX® and PRIME® available as add-ons.
						</p>
						<a className="btn blue-gradient">START YOUR FREE TRIAL</a>
					</div>
				</div>
			</div>
		);
	}
}
