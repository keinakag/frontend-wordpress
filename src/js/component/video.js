import React, { Component } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { MDBContainer } from "mdbreact";

export default class Video extends React.Component {
	render() {
		return (
			<div className="search">
				<div className="active-purple-3 active-purple-4 mb-4">
					<input className="form-control" type="text" placeholder="Search" aria-label="Search" />
				</div>
			</div>
		);
	}
}
