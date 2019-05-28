import React, { Component } from "react";
import { Link } from "react-router-dom";
import { MDBRow, MDBCol, MDBCard, MDBCardBody, MDBBtn } from "mdbreact";
import { MDBContainer } from "mdbreact";

export default class Maincards extends React.Component {
	render() {
		return (
			<MDBContainer>
				<div className="w-auto">
					<section className="text-center my-5">
						<h1 className="h1-responsive font-weight-bold-grey-text text-center my-5">Select Your Plan</h1>
						<h2 className="grey-text text-center w-responsive mx-auto mb-5">
							No contracts, commitments, or equipment rentals.
						</h2>
						<MDBRow>
							<MDBCol lg="4" md="12" className="mb-lg-0 mb-4">
								<MDBCard
									className="card-image"
									style={{
										backgroundImage:
											'url("https://cdn-images-1.medium.com/max/800/1*4yRHPXIXm4XGmiBSg8h29Q.jpeg")'
									}}>
									<div className="text-white text-center pricing-card d-flex align-items-center rgba-stylish-strong py-3 px-3 rounded">
										<MDBCardBody>
											<h5>Basic</h5>
											<div className="price pt-0">
												<h2 className="number mb-0">$8.99</h2>
											</div>
											<ul className="striped mb-0">
												<li>
													<p>
														<strong>1</strong> Screens you can watch on at the same time
													</p>
												</li>
												<li>
													<p>Watch on your laptop, TV, phone and tablet</p>
												</li>
												<li>
													<p>Unlimited movies and TV shows</p>
												</li>
												<li>
													<p>Cancel anytime</p>
												</li>
												<li>
													<p>First month free</p>
												</li>
											</ul>
											<MDBBtn outline color="white">
												Select Plan
											</MDBBtn>
										</MDBCardBody>
									</div>
								</MDBCard>
							</MDBCol>
							<MDBCol lg="4" md="12" className="mb-lg-0 mb-4">
								<MDBCard
									className="card-image"
									style={{
										backgroundImage:
											'url("https://cdn-images-1.medium.com/max/800/1*4yRHPXIXm4XGmiBSg8h29Q.jpeg")'
									}}>
									<div className="text-white text-center pricing-card d-flex align-items-center rgba-teal-strong py-3 px-3 rounded">
										<MDBCardBody>
											<h5>STANDARD</h5>
											<div className="price pt-0">
												<h2 className="number mb-0">$12.99</h2>
											</div>
											<ul className="striped mb-0">
												<li>
													<p>HD available</p>
												</li>
												<li>
													<p>
														<strong>2</strong>
														Screens you can watch on at the same time
													</p>
												</li>
												<li>
													<p>Watch on your laptop, TV, phone and tablet</p>
												</li>
												<li>
													<p>Unlimited movies and TV shows</p>
												</li>
												<li>
													<p>Cancel anytime</p>
												</li>
												<li>
													<p>First month free</p>
												</li>
											</ul>
											<MDBBtn outline color="white">
												Select Plan
											</MDBBtn>
										</MDBCardBody>
									</div>
								</MDBCard>
							</MDBCol>
							<MDBCol lg="4" md="12" className="mb-lg-0 mb-4">
								<MDBCard
									className="card-image"
									style={{
										backgroundImage:
											'url("https://cdn-images-1.medium.com/max/800/1*4yRHPXIXm4XGmiBSg8h29Q.jpeg")'
									}}>
									<div className="text-white text-center pricing-card d-flex align-items-center rgba-stylish-strong py-3 px-3 rounded">
										<MDBCardBody>
											<h5>PREMIUM</h5>
											<div className="price pt-0">
												<h2 className="number mb-0">$15.99</h2>
											</div>
											<ul className="striped mb-0">
												<li>
													<p>HD available</p>
												</li>
												<li>
													<p>Ultra HD available</p>
												</li>
												<li>
													<p>
														<strong>4</strong> Screens you can watch on at the same time
													</p>
												</li>
												<li>
													<p>Watch on your laptop, TV, phone and tablet</p>
												</li>
												<li>
													<p>Unlimited movies and TV shows</p>
												</li>
												<li>
													<p>Cancel anytime</p>
												</li>
												<li>
													<p>First month free</p>
												</li>
											</ul>
											<MDBBtn outline color="white">
												Select Plan
											</MDBBtn>
										</MDBCardBody>
									</div>
								</MDBCard>
							</MDBCol>
						</MDBRow>
					</section>
				</div>
			</MDBContainer>
		);
	}
}
