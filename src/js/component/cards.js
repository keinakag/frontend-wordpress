import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext.js";
export default class Cards extends React.Component {
	render() {
		return (
			<Context.Consumer>
				{({ store, actions }) => {
					return store.movies.map((item, index) => {
						return (
							<div key={index} className="dashboard-container">
								<h4 className="heading-extra-margin-bottom">Comedies</h4>

								<div className="row">
									<div className="col-12 col-md-6 col-lg-4 col-xl-3">
										<div className="item-listing-container-skrn">
											<a href="dashboard-movie-profile.html">
												<img src={item.artwork_208x117} alt="Listing" />
											</a>

											<div className="item-listing-text-skrn">
												<div className="item-listing-text-skrn-vertical-align">
													<h6>
														<a href="dashboard-movie-profile.html">{item.title}</a>
													</h6>

													<div
														className="circle-rating-pro"
														data-value="0.86"
														data-animation-start-value="0.86"
														data-size={32}
														data-thickness={3}
														data-fill="{
                                      &quot;color&quot;: &quot;#42b740&quot;
                                    }"
														data-empty-fill="#def6de"
														data-reverse="true">
														<span style={{ color: "#42b740" }}>8.6</span>
													</div>
												</div>

												{/* close .item-listing-text-skrn-vertical-align */}
											</div>

											{/* close .item-listing-text-skrn */}
										</div>

										{/* close .item-listing-container-skrn */}
									</div>
								</div>
							</div>
						);
					});
				}}
			</Context.Consumer>
		);
	}
}
