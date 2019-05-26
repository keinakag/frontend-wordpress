import React from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.scss";

export default class Mainjumbo extends React.Component {
	render() {
		return (
			<div
				className="card card-image"
				style={{ backgroundImage: "url(https://mdbootstrap.com/img/Photos/Others/forest2.jpg)" }}>
				<div className="text-white text-center rgba-stylish-strong py-5 px-4">
					<div className="py-5">
						<h1 className="h1 orange-text">
							<i className="fas fa-camera-retro" />
							All Your TV In One Place
						</h1>
						<h2 className="card-title h2 my-4 py-2">
							Watch thousands of shows and movies, <br />
							with plans starting at $5.99/month.
						</h2>
						<p className="mb-4 pb-2 px-md-5 mx-md-5">
							HBO®, SHOWTIME®, CINEMAX® and STARZ® available as add-ons.
						</p>
						<Link to={"/home/"}>
							<a className="btn peach-gradient">
								<i className="fas fa-clone left" /> START FREE TRIAL NOW
							</a>
						</Link>
					</div>
				</div>
			</div>
		);
	}
}
