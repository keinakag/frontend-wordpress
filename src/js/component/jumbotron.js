import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Jumbotron extends React.Component {
	render() {
		return (
			<div id="video-carousel-example" className="carousel slide carousel-fade" data-ride="carousel">
				<ol className="carousel-indicators">
					<li data-target="#carouselExampleCaptions" data-slide-to={0} className="active" />
					<li data-target="#carouselExampleCaptions" data-slide-to={1} />
					<li data-target="#carouselExampleCaptions" data-slide-to={2} />
				</ol>
				&gt;
				<ol className="carousel-indicators">
					<li data-target="#video-carousel-example" data-slide-to={0} className="active" />
					<li data-target="#video-carousel-example" data-slide-to={1} />
					<li data-target="#video-carousel-example" data-slide-to={2} />
				</ol>
				<div className="carousel-inner" role="listbox">
					<div className="carousel-item active">
						<video className="video-fluid" autoPlay loop muted>
							<source src="https://mdbootstrap.com/img/video/Tropical.mp4" type="video/mp4" />
						</video>
						<div className="carousel-caption d-none d-md-block">
							<h5>First slide label</h5>
							<p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
						</div>
					</div>
					<div className="carousel-item">
						<video className="video-fluid" autoPlay loop muted>
							<source src="https://mdbootstrap.com/img/video/forest.mp4" type="video/mp4" />
						</video>
					</div>
					<div className="carousel-item">
						<video className="video-fluid" autoPlay loop muted>
							<source src="https://mdbootstrap.com/img/video/Agua-natural.mp4" type="video/mp4" />
						</video>
					</div>
				</div>
				<a className="carousel-control-prev" href="#video-carousel-example" role="button" data-slide="prev">
					<span className="carousel-control-prev-icon" aria-hidden="true" />
					<span className="sr-only">Previous</span>
				</a>
				<a className="carousel-control-next" href="#video-carousel-example" role="button" data-slide="next">
					<span className="carousel-control-next-icon" aria-hidden="true" />
					<span className="sr-only">Next</span>
				</a>
			</div>
		);
	}
}
