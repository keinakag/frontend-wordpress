import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

export default class Navbar extends React.Component {
	render() {
		return (
			<nav className="mb-1 navbar navbar-expand-lg navbar-dark secondary-color lighten-1">
				<a className="navbar-brand" href="#">
					Navbar
				</a>
				<button
					className="navbar-toggler"
					type="button"
					data-toggle="collapse"
					data-target="#navbarSupportedContent-555"
					aria-controls="navbarSupportedContent-555"
					aria-expanded="false"
					aria-label="Toggle navigation">
					<span className="navbar-toggler-icon" />
				</button>
				<div className="collapse navbar-collapse" id="navbarSupportedContent-555">
					<ul className="navbar-nav mr-auto">
						<li className="nav-item active">
							<a className="nav-link" href="#">
								Home
								<span className="sr-only">(current)</span>
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#">
								Features
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#">
								Pricing
							</a>
						</li>
						<li className="nav-item dropdown">
							<a
								className="nav-link dropdown-toggle"
								id="navbarDropdownMenuLink-555"
								data-toggle="dropdown"
								aria-haspopup="true"
								aria-expanded="false">
								Dropdown
							</a>
							<div
								className="dropdown-menu dropdown-secondary"
								aria-labelledby="navbarDropdownMenuLink-555">
								<a className="dropdown-item" href="#">
									Action
								</a>
								<a className="dropdown-item" href="#">
									Another action
								</a>
								<a className="dropdown-item" href="#">
									Something else here
								</a>
							</div>
						</li>
					</ul>
					<ul className="navbar-nav ml-auto nav-flex-icons">
						<li className="nav-item">
							<a className="nav-link waves-effect waves-light">
								1<i className="far fa-bell" />
							</a>
						</li>
						<li id="avatar" className="nav-item avatar dropdown">
							<a
								className="nav-link dropdown-toggle"
								id="navbarDropdownMenuLink-55"
								data-toggle="dropdown"
								aria-haspopup="true"
								aria-expanded="false">
								<img
									src="https://mdbootstrap.com/img/Photos/Avatars/img%20(20).jpg"
									alt="Avatar"
									className="md-avatar rounded-circle size-1"
								/>
							</a>
							<div
								className="dropdown-menu dropdown-menu-lg-right dropdown-secondary"
								aria-labelledby="navbarDropdownMenuLink-55">
								<a className="dropdown-item" href="#">
									My Profile
								</a>
								<a className="dropdown-item" href="#">
									Account details
								</a>
								<a className="dropdown-item" href="#">
									Help Center
								</a>
								<a className="dropdown-item" href="#">
									Log Out
								</a>
							</div>
						</li>
					</ul>
				</div>
			</nav>
		);
	}
}
