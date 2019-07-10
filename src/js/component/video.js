import React, { Component } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { MDBContainer } from "mdbreact";

export default class Video extends React.Component {
	render() {
		return (
			<div className="wrap">
				<div className="search">
					<input
						style={{ fontSize: "50px" }}
						type="text"
						className="searchTerm"
						placeholder="What are you looking for?"
					/>
					<button type="submit" className="searchButton">
						<i className="fa fa-search" />
					</button>
				</div>
			</div>
		);
	}
}
