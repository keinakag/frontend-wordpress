import React, { Component } from "react";

export const Footer = () => (
	<footer className="page-footer font-small mdb-color pt-4">
		{/* Footer Links */}
		<div className="container text-center text-md-left">
			{/* Footer links */}
			<div className="row text-center text-md-left mt-3 pb-3">
				{/* Grid column */}
				<div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
					<h6 className="text-uppercase mb-4 font-weight-bold">Company name</h6>
					<p>
						Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit amet,
						consectetur adipisicing elit.
					</p>
				</div>
				{/* Grid column */}
				<hr className="w-100 clearfix d-md-none" />
				{/* Grid column */}
				<div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
					<h6 className="text-uppercase mb-4 font-weight-bold">Products</h6>
					<p>
						<a href="#!">MDBootstrap</a>
					</p>
					<p>
						<a href="#!">MDWordPress</a>
					</p>
					<p>
						<a href="#!">BrandFlow</a>
					</p>
					<p>
						<a href="#!">Bootstrap Angular</a>
					</p>
				</div>
				{/* Grid column */}
				<hr className="w-100 clearfix d-md-none" />
				{/* Grid column */}
				<div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
					<h6 className="text-uppercase mb-4 font-weight-bold">Useful links</h6>
					<p>
						<a href="#!">Your Account</a>
					</p>
					<p>
						<a href="#!">Become an Affiliate</a>
					</p>
					<p>
						<a href="#!">Shipping Rates</a>
					</p>
					<p>
						<a href="#!">Help</a>
					</p>
				</div>
				{/* Grid column */}
				<hr className="w-100 clearfix d-md-none" />
				{/* Grid column */}
				<div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
					<h6 className="text-uppercase mb-4 font-weight-bold">Contact</h6>
					<p>
						<i className="fas fa-home mr-3" /> New York, NY 10012, US
					</p>
					<p>
						<i className="fas fa-envelope mr-3" /> info@gmail.com
					</p>
					<p>
						<i className="fas fa-phone mr-3" /> + 01 234 567 88
					</p>
					<p>
						<i className="fas fa-print mr-3" /> + 01 234 567 89
					</p>
				</div>
				{/* Grid column */}
			</div>
			{/* Footer links */}
			<hr />
			{/* Grid row */}
			<div className="row d-flex align-items-center">
				{/* Grid column */}
				<div className="col-md-7 col-lg-8">
					{/*Copyright*/}
					<p className="text-center text-md-left">
						made by:
						<a href="https://mdbootstrap.com/education/bootstrap/">
							<strong> James and Keiji</strong>
						</a>
					</p>
				</div>
				{/* Grid column */}
				{/* Grid column */}
				<div className="col-md-5 col-lg-4 ml-lg-0">
					{/* Social buttons */}
					<div className="text-center text-md-right">
						<ul className="list-unstyled list-inline">
							<li className="list-inline-item">
								<a className="btn-floating btn-sm rgba-white-slight mx-1">
									<i className="fab fa-facebook-f" />
								</a>
							</li>
							<li className="list-inline-item">
								<a className="btn-floating btn-sm rgba-white-slight mx-1">
									<i className="fab fa-twitter" />
								</a>
							</li>
							<li className="list-inline-item">
								<a className="btn-floating btn-sm rgba-white-slight mx-1">
									<i className="fab fa-google-plus-g" />
								</a>
							</li>
							<li className="list-inline-item">
								<a className="btn-floating btn-sm rgba-white-slight mx-1">
									<i className="fab fa-linkedin-in" />
								</a>
							</li>
						</ul>
					</div>
				</div>
				{/* Grid column */}
			</div>
			{/* Grid row */}
		</div>
		{/* Footer Links */}
	</footer>
);
