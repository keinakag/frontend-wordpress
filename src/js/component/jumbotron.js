import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Jumbotron extends React.Component {
	render() {
		return (
			<div>
				<div id="carouselExampleFade" className="carousel slide carousel-fade" data-ride="carousel">
					<div className="carousel-inner">
						<div className="carousel-item active">
							<img
								className="d-block w-100"
								src="https://mdbootstrap.com/img/Photos/Slides/img%20(15).jpg"
								alt="First slide"
							/>
							<div id="carousel" className="carousel-caption d-none d-md-block">
								<div className="container d-flex h-100">
									<div className="row justify-content-center align-self-center">
										<div className="row">
											<div id="infojumbo" className=" col-6">
												<h1>Catch-22</h1>
												<h2>S1 E1 - Episode 1</h2>
												<h5>
													Young American flyers arrive in war and discover that the
													bureaucracy is more deadly than the enemy.
												</h5>
												<span>
													<Link to={"/search"}>
														<i className="text-white far fa-play-circle  fa-3x mr-3" />
													</Link>
													START WATCHING
												</span>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<a className="carousel-control-prev" href="#carouselExampleFade" role="button" data-slide="prev">
					<span className="carousel-control-prev-icon" aria-hidden="true" />
					<span className="sr-only">Previous</span>
				</a>
				<a className="carousel-control-next" href="#carouselExampleFade" role="button" data-slide="next">
					<span className="carousel-control-next-icon" aria-hidden="true" />
					<span className="sr-only">Next</span>
				</a>
			</div>
		);
	}
}
