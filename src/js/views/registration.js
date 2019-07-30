import React from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/home.scss";
import Groverlogo from "../../img/groverlogo.png";

import "bootstrap/dist/css/bootstrap.min.css";

export default class Registration extends React.Component {
	constructor(props) {
		super(props);
		this.InputEmail = React.createRef();
		this.InputPassword = React.createRef();
		this.InputUsername = React.createRef();
		this.Birthday = React.createRef();
		this.InputGender = React.createRef();
	}

	handleClick = actions => {
		actions.registerUser(
			this.InputEmail.current.value,
			this.InputPassword.current.value,
			this.InputUsername.current.value,
			this.Birthday.current.value,
			this.InputGender.current.value
		);
	};
	render() {
		return (
			<Context.Consumer>
				{({ store, actions }) => {
					return (
						<div>
							<div className="registracion">
								<nav id="sticky" className="navbar navbar-expand-lg fixed-top scrolling-navbar">
									<p>
										<img style={{ width: "10%", height: "10%" }} src={Groverlogo} />
									</p>

									<span id="log">
										<Link to={"/"}>
											<strong>LOG IN</strong>
										</Link>
									</span>
								</nav>
								<div className="container-fluid bg">
									<div className="row">
										<div className="col-md-4 col-sm-4 col-xs-12" />
										<div className="col-md-4 col-sm-4 col-xs-12">
											<form className="form-container">
												<div className="form-group">
													<label htmlFor="exampleInputEmail1">Email address</label>
													<input
														type="email"
														className="form-control"
														ref={this.InputEmail}
														id="InputEmail"
														aria-describedby="emailHelp"
														placeholder="Enter email"
													/>
												</div>
												<div className="form-group">
													<label htmlFor="exampleInputPassword1">Password</label>
													<input
														type="password"
														className="form-control"
														ref={this.InputPassword}
														id="InputPassword"
														placeholder="Password"
													/>
												</div>
												<div className="form-group">
													<label htmlFor="exampleInputPassword1">Username</label>
													<input
														type="text"
														className="form-control"
														id="InputUsername"
														ref={this.InputUsername}
														placeholder="username"
													/>
												</div>
												<div className="mb-0">
													<label htmlFor="exampleInputPassword1">Birthday</label>
												</div>
												<div className="form-row  ">
													<div className="col-md-4 mb-3 ">
														<label htmlFor="validationCustom02" />
														<input
															type="text"
															className="form-control"
															id="Birthday"
															ref={this.Birthday}
															placeholder="Month"
															defaultValue=""
															required
														/>
														<div className="valid-feedback">Looks good!</div>
													</div>
													<div className="col-md-4 mb-3 ">
														<label htmlFor="validationCustom02" />

														<input
															type="text"
															className="form-control"
															id="InputDay"
															placeholder="Day"
															defaultValue=""
															required
														/>
														<div className="valid-feedback">Looks good!</div>
													</div>
													<div className="col-md-4 mb-3 ">
														<label htmlFor="validationCustom02" />
														<input
															type="text"
															className="form-control"
															id="InputYear"
															placeholder="Year"
															defaultValue=""
															required
														/>
														<div className="valid-feedback">Looks good!</div>
													</div>
												</div>
												<div className="form-group">
													<label htmlFor="exampleFormControlSelect1">Gender</label>
													<select
														className="form-control"
														id="InputGender"
														ref={this.InputGender}>
														<option>Female</option>
														<option>Male</option>
														<option>Prefer not to say</option>
													</select>
												</div>
												<div className="text-center ">
													<p>or sign up with:</p>
													<a href target="https://www.facebook.com/" className="fb-ic">
														<i className="fab fa-facebook-f fa-lg white-text mr-4"> </i>
													</a>
													<a className="tw-ic">
														<i className="fab fa-twitter fa-lg white-text mr-4"> </i>
													</a>
													<hr />

													<p>
														By clicking
														<em>Sign up</em> you agree to our
														<a href target="">
															terms of service
														</a>
													</p>
												</div>
												<button
													type="button"
													onClick={() => this.handleClick(actions)}
													className="btn blue-gradient btn-lg btn-block mt-0">
													Submit
												</button>
											</form>
										</div>
									</div>
								</div>

								{/* Footer Elements */}
								<footer id="footerbottom" className="page-footer font-small cyan darken-3">
									<div className="container">
										<div className="row">
											<div className="col-md-12 py-5">
												<div className="mb-5 flex-center">
													<a className="pin-about white-text fa-2x mr-md-5 mr-3">
														<h6>About Ads</h6>
													</a>
													<a className="pin-terms white-text fa-2x mr-md-5 mr-3">
														<h6> Terms of Use </h6>
													</a>
													<a className="pin-privacy white-text fa-2x mr-md-5 mr-3">
														<h6> Privacy Policy</h6>
													</a>
													<a className="pin-2019 white-text fa-2x">
														<h6> © 2019 Grover</h6>
													</a>
												</div>
											</div>
										</div>
									</div>
								</footer>
							</div>
						</div>
					);
				}}
			</Context.Consumer>
		);
	}
}
