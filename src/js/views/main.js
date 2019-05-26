import React from "react";
import "../../styles/home.scss";
import Mainjumbo from "../component/mainjumbo";
import Maincards from "../component/maincards";
import "bootstrap/dist/css/bootstrap.min.css";

export class Main extends React.Component {
	render() {
		return (
			<div>
				<Mainjumbo />
				<div>
					<Maincards />
				</div>
			</div>
		);
	}
}
