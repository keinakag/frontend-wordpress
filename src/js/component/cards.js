import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext.js";
import "bootstrap/dist/css/bootstrap.min.css";
export default class Cards extends React.Component {
	render() {
		return (
			<Context.Consumer>
				{({ store, actions }) => {
					return store.movies.map((item, index) => {
						return (
							<div key={index} className="card mb-4">
								<div className="view overlay">
									<img className="card-img-top" src={item.artwork_304x171} alt="Card image cap" />
									<a href="#!">
										<div className="mask rgba-white-slight" />
									</a>
								</div>
								<div className="card-body">
									<h4 className="card-title">{item.tittle}</h4>
									<p className="card-text">{item.alternate_titles}</p>
								</div>
							</div>
						);
					});
				}}
			</Context.Consumer>
		);
	}
}
