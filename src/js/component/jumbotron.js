import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Jumbotron extends React.Component {
	render() {
		return (
			<div className="flexslider progression-studios-dashboard-slider">
				<ul className="slides">
					<li className="progression_studios_animate_left">
						{/* close .progression-studios-slider-image-background */}
					</li>

					<li className="progression_studios_animate_in">
						<div
							className="progression-studios-slider-dashboard-image-background"
							style={{ backgroundImage: "url(http://via.placeholder.com/1920x698)" }}>
							<div className="progression-studios-slider-display-table">
								<div className="progression-studios-slider-vertical-align">
									<div className="container">
										<a
											className="progression-studios-slider-play-btn afterglow"
											href="#VideoLightbox-2">
											<i className="fas fa-play" />
										</a>

										<video
											id="VideoLightbox-2"
											poster="https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-HD.jpg?v1"
											width={960}
											height={540}>
											<source
												src="https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-HD.mp4"
												type="video/mp4"
											/>

											<source
												src="https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-HD.webm"
												type="video/webm"
											/>
										</video>

										<div
											className="circle-rating-pro"
											data-value="0.82"
											data-animation-start-value="0.82"
											data-size={70}
											data-thickness={6}
											data-fill="{
                                          &quot;color&quot;: &quot;#42b740&quot;
                                        }"
											data-empty-fill="#203521"
											data-reverse="true">
											<span style={{ color: "#42b740" }}>8.2</span>
										</div>

										<div className="progression-studios-slider-dashboard-caption-width">
											<div className="progression-studios-slider-caption-align">
												<h6 className="light-fonts-pro">TV Series</h6>

												<ul className="progression-studios-slider-rating">
													<li>PG-13</li>

													<li>HD</li>
												</ul>

												<h2 className="light-fonts-pro">
													<a href="dashboard-movie-profile.html">Made In America</a>
												</h2>

												<ul className="progression-studios-slider-meta">
													<li>15 August, 2016 (UK)</li>

													<li>163 min.</li>

													<li>Documentary</li>
												</ul>

												<p className="progression-studios-slider-description light-fonts-pro">
													                                                            pa
												</p>

												<a
													className="btn btn-green-pro btn-slider-pro afterglow"
													href="#VideoLightbox-2">
													<i className="fas fa-play" /> Watch Trailer
												</a>

												<div className="progression-studios-slider-more-options">
													<i className="fas fa-ellipsis-h" />

													<ul>
														<li>
															<a href="#!">Add to Favorites</a>
														</li>

														<li>
															<a href="#!">Add to Watchlist</a>
														</li>

														<li>
															<a href="#!">Add to Playlist</a>
														</li>

														<li>
															<a href="#!">Share...</a>
														</li>

														<li>
															<a href="#!">Write A Review</a>
														</li>
													</ul>
												</div>

												<div className="clearfix" />

												<h5 className="light-fonts-pro">Starring</h5>

												<ul className="progression-studios-staring-slider">
													<li>
														<a href="#!">
															<img src="images/demo/user-1.jpg" alt="Starring" />
														</a>
													</li>

													<li>
														<a href="#!">
															<img src="images/demo/user-2.jpg" alt="Starring" />
														</a>
													</li>

													<li>
														<a href="#!">
															<img src="images/demo/user-3.jpg" alt="Starring" />
														</a>
													</li>

													<li>
														<a href="#!">
															<img src="images/demo/user-4.jpg" alt="Starring" />
														</a>
													</li>

													<li>
														<a href="#!">
															<img src="images/demo/user-5.jpg" alt="Starring" />
														</a>
													</li>

													<li>
														<a href="#!">
															<img src="images/demo/user-6.jpg" alt="Starring" />
														</a>
													</li>
												</ul>
											</div>
										</div>
									</div>
								</div>
							</div>

							<div className="progression-studios-slider-mobile-background-cover-dark" />
						</div>
					</li>
				</ul>
			</div>
		);
	}
}
