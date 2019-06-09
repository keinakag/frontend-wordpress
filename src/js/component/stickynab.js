import React from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { MDBContainer } from "mdbreact";
import "../../styles/demo.scss";
import Groverlogo from "../../img/groverlogo.png";

export default class Stickynab extends React.Component {
	render() {
		return (
			<div>
				<div
					className="modal fade"
					id="exampleModal"
					tabIndex="-1"
					role="dialog"
					aria-labelledby="exampleModalLabel"
					data-backdrop="false"
					aria-hidden="true">
					<div className="modal-dialog" role="document">
						<div className="modal-content">
							<form className="text-center light-blue-text border border-light p-5">
								<p className="h4 mb-4 ">SIGN IN</p>

								<input
									type="email"
									id="defaultLoginFormEmail"
									className="form-control mb-4"
									placeholder="E-mail"
								/>

								<input
									type="password"
									id="defaultLoginFormPassword"
									className="form-control mb-4"
									placeholder="Password"
								/>
								<div className="d-flex justify-content-around">
									<div>
										<div className="custom-control custom-checkbox">
											<input
												type="checkbox"
												className="custom-control-input"
												id="defaultLoginFormRemember"
											/>
											<label className="custom-control-label" htmlFor="defaultLoginFormRemember">
												Remember me
											</label>
										</div>
									</div>
									<div>
										<a href>Forgot password?</a>
									</div>
								</div>

								<button className="btn btn-info btn-block my-4 " type="submit">
									<Link to={"/home"}>
										<strong className="white-text">Sign in</strong>
									</Link>
								</button>

								<p>
									Not a member?
									<Link to={"/registration"}>
										<strong>Register</strong>
									</Link>
								</p>
								<p>or sign in with:</p>
								<a className="fb-ic mr-3 light-blue-text" role="button">
									<i className="fab fa-lg fa-facebook-f" />
								</a>
								<a className="tw-ic mr-3 light-blue-text" role="button">
									<i className="fab fa-lg fa-twitter" />
								</a>
								<a className="gplus-ic mr-3 light-blue-text" role="button">
									<i className="fab fa-lg fa-google-plus-g" />
								</a>
								<a className="ins-ic mr-3 light-blue-text" role="button">
									<i className="fab fa-lg fa-instagram" />
								</a>
							</form>
						</div>
					</div>
				</div>

				<nav id="sticky" className="navbar navbar-expand-lg fixed-top scrolling-navbar">
					<p>
						<img style={{ width: "10%", height: "10%" }} src={Groverlogo} />
					</p>

					<p id="log" className="navbar-text pull-right" data-toggle="modal" data-target="#exampleModal">
						<strong>LOG IN</strong>
					</p>
				</nav>
			</div>
		);
	}
}
