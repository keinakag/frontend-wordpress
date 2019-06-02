import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Footer extends React.Component {
	render() {
		return (
			<footer className="page-footer font-small ">
				<div className="container">
					<div className="row text-center d-flex justify-content-center pt-5 mb-3">
						<div className="col-md-2 mb-3">
							<h6 className="text-uppercase font-weight-bold">
								<a href="#!">ABOUT</a>
							</h6>
						</div>

						<div className="col-md-2 mb-3">
							<h6 className="text-uppercase font-weight-bold">
								<a href="#!">JOBS</a>
							</h6>
						</div>

						<div className="col-md-2 mb-3">
							<h6 className="text-uppercase font-weight-bold">
								<a href="#!">HELP</a>
							</h6>
						</div>

						<div className="col-md-2 mb-3">
							<h6 className="text-uppercase font-weight-bold">
								<a href="#!">About Ads </a>
							</h6>
						</div>

						<div className="col-md-2 mb-3">
							<h6 className="text-uppercase font-weight-bold">
								<a href="#!">Terms of Use</a>
							</h6>
						</div>
						<div className="col-md-2 mb-3">
							<h6 className="text-uppercase font-weight-bold">
								<a href="#!">Policy</a>
							</h6>
						</div>
					</div>

					<hr className="rgba-white-light" style={{ margin: "0 15%" }} />

					<div className="row d-flex text-center justify-content-center mb-md-0 mb-4">
						<div className="col-md-8 col-12 mt-5">
							<p style={{ lineHeight: "1.7rem" }}>
								Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
								laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
								architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas
								sit aspernatur aut odit aut fugit, sed quia consequuntur.
							</p>
						</div>
					</div>
					<hr className="clearfix d-md-none rgba-white-light" style={{ margin: "10% 15% 5%" }} />

					<div className="row pb-3">
						<div className="col-md-12">
							<div className="mb-5 flex-center">
								<a className="fb-ic">
									<i className="fab fa-facebook-f fa-lg white-text mr-4"> </i>
								</a>

								<a className="tw-ic">
									<i className="fab fa-twitter fa-lg white-text mr-4"> </i>
								</a>

								<a className="gplus-ic">
									<i className="fab fa-google-plus-g fa-lg white-text mr-4"> </i>
								</a>

								<a className="li-ic">
									<i className="fab fa-linkedin-in fa-lg white-text mr-4"> </i>
								</a>

								<a className="ins-ic">
									<i className="fab fa-instagram fa-lg white-text mr-4"> </i>
								</a>

								<a className="pin-ic">
									<i className="fab fa-pinterest fa-lg white-text"> </i>
								</a>
							</div>
						</div>
					</div>
				</div>

				<div className="footer-copyright text-center py-3">
					© 2019 Copyright:
					<a href="https://mdbootstrap.com/education/bootstrap/"> Made by James and Keiji</a>
				</div>
			</footer>
		);
	}
}
